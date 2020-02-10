const supertest = require('supertest')
const app = require('../app')
const { db } = require('../database/models/index')

const api = supertest(app)

const initialThreads = [
  {
    id: 1,
    user_id: 1,
    title: 'Test thread',
    content: 'What do you like to play the most?',
    category: 'videogames'
  }
]

beforeEach(async () => {
  await db.Thread.destroy({
    where: {},
    truncat: true
  })

  let thread = await db.Thread.build(initialThreads[0])
  const saved = await thread.save()
})

describe('Thread endpoints', () => {
  it('should return all threads as json', async () => {
    await api
      .get('/api/threads')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  it('return right amount of threads with given category', async () => {
    await api.get('/api/threads/videogames').expect(200)
  })

  it('should return single thread', async () => {
    const response = await api
      .get('/api/threads/videogames/1')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const body = response.body
    const expectedResponse = {
      id: body.id,
      user_id: body.user_id,
      title: body.title,
      content: body.content,
      category: body.category,
      imageUrl: null,
      posts: []
    }

    expect(expectedResponse).toEqual({
      id: 1,
      user_id: 1,
      title: 'Test thread',
      content: 'What do you like to play the most?',
      category: 'videogames',
      imageUrl: null,
      posts: []
    })
  })
})

afterAll(async () => {
  await db.sequelize.close()
})
