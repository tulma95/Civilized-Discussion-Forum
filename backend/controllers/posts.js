const postsRouter = require('express').Router()
const { Post } = require('../database/models/index')
const { uploadImage } = require('../utils/uploadImage')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

postsRouter.post('/', async (req, res, next) => {
  const body = req.body

  const token = getTokenFrom(req)

  const decodedToken = token && jwt.verify(token, process.env.SECRET)

  const imageUrl =
    body.image.length === 0 ? null : await uploadImage(body.image)

  const newPost = {
    user_id: token ? decodedToken.id : null,
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
