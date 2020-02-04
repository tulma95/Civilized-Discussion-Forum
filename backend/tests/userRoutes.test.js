const { User } = require('../database/models/index')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.destroy({ where: {} })
    await User.create({ username: 'admin', passwordhash: 'sekret' })
  })

  test.only('user can be created', async () => {
    const usersAtStart = await User.findAll()

    const newUser = {
      username: 'Rikusti',
      password: 'newpass'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await User.findAll()

    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)
  })

  // test('Cannot create user with already existing username', () => {

  // })
})
