const router = require('express').Router()
const { Thread } = require('../database/models/index')

router.post('/reset', async (req, res) => {
  await Thread.destroy({ where: {} })
  res.status(204).end()
})

module.exports = router
