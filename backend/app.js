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

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function (err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.use('/', express.static('./frontend/build/'))
app.use('/api/threads', threadsRouter)
app.use('/api/posts', postsRouter)
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'))
})

module.exports = app