const { User } = require('../database/models/index')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const newUser = {
  username: 'Rikusti',
  password: 'newpass'
}

describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.destroy({ where: {} })
    await User.create({ username: 'admin', passwordhash: 'sekret' })
  })

  test('user can be created', async () => {
    const usersAtStart = await User.findAll()

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await User.findAll()

    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)
  })

  test('Cannot create user with already existing username', async () => {
    const usersAtStart = await User.findAll()

    const newUser = {
      username: 'admin',
      password: 'password'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const usersAtEnd = await User.findAll()

    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })

  test('Cannot create user with too short password', async () => {
    const newUser = {
      username: 'Testaccount',
      password: 'aihr'
    }

    const response = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const error = response.body.error
    expect(error).toEqual('password must be longer than 5 characters')
  })

  test('Cannot create user with too short name', async () => {
    const newUser = {
      username: 'sh',
      password: 'secretPassword'
    }

    const response = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    const error = response.body.error
    expect(error).toEqual(
      'Validation error: Username must be between 3 and 100 characters long'
    )
  })
})
