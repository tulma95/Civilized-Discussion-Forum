const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const { User } = require('../database/models/index')

usersRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body

    if (body.password.length < 5) {
      throw {
        name: 'ValidationError',
        message: 'password must be longer than 5 characters'
      }
    }

    const saltRounds = 10
    const passwordhash = await bcrypt.hash(body.password, saltRounds)

    const newUser = await User.create({
      username: body.username,
      passwordhash
    })
    res.status(200).json(newUser)
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter
