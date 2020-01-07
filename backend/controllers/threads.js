const threadsRouter = require('express').Router()
const { User, Post, Thread } = require('../database/models/index')

threadsRouter.get('/', async (req, res) => {
  const threads = await Thread.findAll({ include: [{ model: Post, as: 'posts' }] })
  res.json(threads)
})


module.exports = threadsRouter