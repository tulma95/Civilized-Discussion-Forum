const supertest = require('supertest')
const app = require('../app')
const { db } = require('../database/models/index')

const api = supertest(app)

describe('Thread endpoints', () => {
  it('all threads are returned as json', async () => {
    await api
      .get('/api/threads')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  it('return right amount of threads with given category', async () => {
    await api
      .get('/api/threads/videogames')
      .expect(200)
  })
})


afterAll(async () => {
  await db.sequelize.close()
})