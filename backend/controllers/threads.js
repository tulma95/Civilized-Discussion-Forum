const threadsRouter = require('express').Router()
const {
  User,
  Post,
  Thread
} = require('../database/models/index')
const fs = require('fs')
const AWS = require('aws-sdk')
const path = require('path')

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
  const newThread = { ...req.body, category }


  let base64Image = req.body.image.split(';base64,').pop();
  const newImageName = 'hyvamaJEE.png'
  fs.writeFileSync(newImageName, base64Image, { encoding: 'base64' }, (err) => {
    console.log(err);
  });

  const BUCKET = 'i.civilized-discussion-forum'
  const localImage = newImageName


  AWS.config.update({
    region: 'us-east-1'
  })

  const s3 = new AWS.S3()

  s3.putObject({
    Bucket: BUCKET,
    Body: fs.readFileSync(localImage),
    Key: newImageName
  })
    .promise()
    .then(res => {
      console.log('done');
    })
    .catch(err => {
      console.log(err);
    })

  try {
    // const savedThread = await Thread.create(newThread)
    res.status(201).json(newThread)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})


module.exports = threadsRouter