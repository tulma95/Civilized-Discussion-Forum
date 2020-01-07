const express = require('express')
const app = express()
const { User, Post, Thread } = require('./database/models/index')
const threadsRouter = require('./controllers/threads')

app.use('/api/threads', threadsRouter)

module.exports = app