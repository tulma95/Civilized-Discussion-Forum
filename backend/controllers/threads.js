const threadsRouter = require('express').Router()
const { User, Post, Thread } = require('../database/models/index')

threadsRouter.get('/', async (req, res) => {
  const threads = await Thread.findAll({ include: [{ model: Post, as: 'posts' }] })
  res.json(threads)
})

threadsRouter.get('/:id', async (req, res) => {
  const thread = await Thread.findAll({
    where: {
      id: req.params.id
    },
    include: [{ model: Post, as: 'posts' }]
  })

  res.json(thread)
})

module.exports = threadsRouter