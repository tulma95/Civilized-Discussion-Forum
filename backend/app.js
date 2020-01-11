const express = require('express')
const app = express()
const threadsRouter = require('./controllers/threads')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({
  extended: true,
  json: true
}))
app.use(bodyParser.json())

app.use('/', express.static('./frontend/build'))
app.use('/api/threads', threadsRouter)

module.exports = app