const threadsRouter = require('express').Router()
const { User, Post, Thread } = require('../database/models/index')

threadsRouter.get('/', async (req, res) => {
  const threads = await Thread.findAll({ include: [{ model: Post, as: 'posts' }] })
  res.json(threads)
})

threadsRouter.get('/:id', async (req, res) => {
  try {
    const thread = await Thread.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Post, as: 'posts' }]
    })

    if (thread) {
      res.status(200).json(thread)
    } else {
      res.status(404).end()
    }
  } catch (error) {

  }


})

module.exports = threadsRouter