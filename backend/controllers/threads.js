const threadsRouter = require('express').Router()
const { User, Post, Thread } = require('../database/models/index')
const { uploadImage } = require('../utils/uploadImage')

require('dotenv').config()

threadsRouter.get('/', async (req, res) => {
  const threads = await Thread.findAll({
    include: [
      {
        model: Post,
        as: 'posts'
      }
    ]
  })
  res.json(threads)
})

threadsRouter.get('/:category', async (req, res) => {
  const category = req.params.category
  const threads = await Thread.findAll({
    where: {
      category
    },
    include: [
      {
        model: Post,
        as: 'posts',
        limit: 3
      }
    ],
    order: [['updatedAt', 'DESC']]
  })
  res.status(200).json(threads)
})

threadsRouter.get('/:category/:id', async (req, res) => {
  try {
    const thread = await Thread.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          as: 'posts'
        }
      ]
    })

    if (thread) {
      res.status(200).json(thread)
    } else {
      res.status(404).end()
    }
  } catch (error) {}
})

threadsRouter.post('/:category', async (req, res, next) => {
  const category = req.params.category
  const body = req.body

  const imageUrl =
    body.image.length === 0 ? null : await uploadImage(req.body.image)

  const newThread = {
    title: body.title.length === 0 ? body.content.slice(0, 15) : body.title,
    category,
    imageUrl,
    user_id: body.user_id,
    content: body.content
  }

  try {
    const savedThread = await Thread.create(newThread)
    res.status(201).json(savedThread)
  } catch (error) {
    next(error)
  }
})

module.exports = threadsRouter
