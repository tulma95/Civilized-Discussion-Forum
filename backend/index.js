const db = require('./database/models/index')
const express = require('express')
const app = express()



db.Post.findAll({ include: [{ model: db.Thread, as: 'thread' }] })
  .then(users => {
    console.log(JSON.stringify(users, null, 4));
  })


app.get('/api/threads', async (req, res) => {
  const threads = await db.Thread.findAll({ include: [{ model: db.Post, as: 'posts' }] })
  res.json(threads)
})

let PORT = 3003
app.listen(PORT || 3003, () => {
  console.log('listening 3003');
})
