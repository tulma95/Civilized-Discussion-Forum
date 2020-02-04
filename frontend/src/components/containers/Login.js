import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ width: '100%' }}
        type='text'
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: '100%' }}
        type='password'
      />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
