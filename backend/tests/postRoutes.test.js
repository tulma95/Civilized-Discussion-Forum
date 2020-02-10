const supertest = require('supertest')
const app = require('../app')
const { db } = require('../database/models/index')

const api = supertest(app)

beforeEach(async () => {
  await db.Post.destroy({
    where: {},
    truncat: true
  })
})

const validTestPostWithoutImage = {
  content: 'Test post should work',
  user_id: 1,
  thread_id: 1,
  image: ''
}

const testPostInvalidContent = {
  content: 'shrt',
  user_id: 1,
  thread_id: 1,
  image: ''
}

describe('Posts endpoint', () => {
  it('should create new post without image', async () => {
    const response = await api
      .post('/api/posts')
      .send(validTestPostWithoutImage)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const body = response.body
    const savedPost = {
      user_id: body.user_id,
      thread_id: body.thread_id,
      content: body.content,
      imageUrl: body.imageUrl
    }

    expect(savedPost).toEqual({
      content: 'Test post should work',
      user_id: 1,
      thread_id: 1,
      imageUrl: null
    })
  })

  it('should send error message if content is too short', async () => {
    const response = await api
      .post('/api/posts')
      .send(testPostInvalidContent)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toEqual({
      error:
        'Validation error: Content length must be between 5 and 250 character'
    })
  })
})

afterAll(async () => {
  await db.sequelize.close()
})
