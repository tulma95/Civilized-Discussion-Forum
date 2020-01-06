const db = require('./database/models/index')

db.User.findAll({ include: [{ model: db.Post, as: 'posts' }] })
  .then(users => {
    console.log(JSON.stringify(users, null, 4));
  })



