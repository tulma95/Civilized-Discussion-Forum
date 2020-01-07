const supertest = require('supertest')
const app = require('../app')
const { db } = require('../database/models/index')

const api = supertest(app)

describe('Thread endpoints', () => {
  it('threads are returned as json', async () => {
    await api
      .get('/api/threads')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  it('send status 404 if no thread', async () => {
    await api
      .get('/api/threads/100')
      .expect(404)
  })

})



afterAll(async () => {
  await db.sequelize.close()
})