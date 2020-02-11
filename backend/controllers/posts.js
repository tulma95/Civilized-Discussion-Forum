const postsRouter = require('express').Router()
const { Post } = require('../database/models/index')
const { uploadImage } = require('../utils/uploadImage')

postsRouter.post('/', async (req, res, next) => {
  const body = req.body

  const imageUrl =
    body.image.length === 0 ? null : await uploadImage(body.image)

  const newPost = {
    thread_id: body.thread_id,
    content: body.content,
    imageUrl
  }

  try {
    const savedPost = await Post.create(newPost)
    res.status(201).json(savedPost)
  } catch (error) {
    next(error)
  }
})

module.exports = postsRouter
