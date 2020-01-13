const threadsRouter = require('express').Router()
const {
  User,
  Post,
  Thread
} = require('../database/models/index')
const AWS = require('aws-sdk')
const uuid = require('uuid/v4')
const sharp = require('sharp')

require('dotenv').config()


threadsRouter.get('/', async (req, res) => {
  const threads = await Thread.findAll({
    include: [{
      model: Post,
      as: 'posts',
      limit: 1
    }]
  })
  res.json(threads)
})

threadsRouter.get('/:category', async (req, res) => {
  const category = req.params.category
  const threads = await Thread.findAll({
    where: {
      category
    },
    include: [{
      model: Post,
      as: 'posts',
      limit: 3
    }]
  })
  res.status(200).json(threads)
})

threadsRouter.get('/:category/:id', async (req, res) => {
  try {
    const thread = await Thread.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Post,
        as: 'posts'
      }]
    })

    if (thread) {
      res.status(200).json(thread)
    } else {
      res.status(404).end()
    }
  } catch (error) { }
})

threadsRouter.post('/:category', async (req, res) => {
  const category = req.params.category
  const body = req.body


  const imageUrl = await uploadImage(req.body.image)


  const newThread = {
    title: body.title,
    category,
    imageUrl,
    user_id: body.user_id,
    content: body.content
  }

  try {

    const savedThread = await Thread.create(newThread)
    res.status(201).json(savedThread)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})


const uploadImage = async (base64Image) => {
  const BUCKET = process.env.BUCKET
  const REGION = process.env.REGION
  const base64Data = new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64');
  const type = base64Image.split(';')[0].split('/')[1];

  const id = uuid()

  const resizedData = sharp(base64Data).resize(120)

  AWS.config.update({
    region: REGION
  })

  const s3 = new AWS.S3()

  const respo = await s3.upload({
    Bucket: BUCKET,
    Body: resizedData,
    Key: `${id}.${type}`,
    ACL: 'public-read',
    ContentType: 'image/png',
    ContentEncoding: 'base64'
  }).promise().catch(err => console.log(err))

  return respo.Location
}

module.exports = threadsRouter