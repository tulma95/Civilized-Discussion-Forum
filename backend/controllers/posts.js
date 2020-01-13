const postsRouter = require('express').Router()
const { Post } = require('../database/models/index')

postsRouter.post('/', async (req, res) => {
  const body = req.body

  // const imageUrl = await uploadImage(req.body.image)

  const imageUrl = null
  const newPost = {
    user_id: body.user_id,
    thread_id: body.thread_id,
    content: body.content,
    image: imageUrl | ''
  }

  try {
    const savedPost = await Post.create(newPost)
    res.status(201).json(savedPost)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})




module.exports = postsRouter