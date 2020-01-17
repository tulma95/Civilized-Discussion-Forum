const express = require('express')
const app = express()
const threadsRouter = require('./controllers/threads')
const postsRouter = require('./controllers/posts')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({
  extended: true,
  json: true
}))
app.use(bodyParser.json({ limit: '10mb' }))



app.use(express.static('./frontend/build/'))
app.use('/api/threads', threadsRouter)
app.use('/api/posts', postsRouter)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

module.exports = app