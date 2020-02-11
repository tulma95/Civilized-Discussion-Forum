const express = require('express')
const app = express()
const threadsRouter = require('./controllers/threads')
const postsRouter = require('./controllers/posts')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const bodyParser = require('body-parser')
const { requestLogger, errorHandler } = require('./utils/middleware')
const path = require('path')

app.use(
  bodyParser.urlencoded({
    extended: true,
    json: true
  })
)
app.use(bodyParser.json({ limit: '10mb' }))
app.use(requestLogger)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(express.static('./frontend/build/'))
app.use('/api/threads', threadsRouter)
app.use('/api/posts', postsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)
app.use(errorHandler)
module.exports = app
