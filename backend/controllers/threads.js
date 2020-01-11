const threadsRouter = require('express').Router()
const {
  User,
  Post,
  Thread
} = require('../database/models/index')

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
  } catch (error) {}
})

threadsRouter.post('/:category', async (req, res) => {
  const category = req.params.category
  const body = req.body
  const newThread = {
    title: body.title,
    user_id: body.user_id,
    category
  }

  try {
    const savedThread = await Thread.create(newThread)
    res.status(201).json(savedThread)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})


module.exports = threadsRouter