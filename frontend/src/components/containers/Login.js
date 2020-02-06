import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [toggleRegister, setToggleRegister] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleChange = setter => event => {
    setter(event.target.value)
  }

  const registerInputs = () => (
    <input
      value={retypePassword}
      placeholder='retype password'
      onChange={handleChange(setRetypePassword)}
      style={{ width: '100%' }}
      type='password'
    />
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        placeholder='username'
        onChange={handleChange(setUsername)}
        style={{ width: '100%' }}
        type='text'
      />
      <input
        value={password}
        placeholder='password'
        onChange={handleChange(setPassword)}
        style={{ width: '100%' }}
        type='password'
      />
      {toggleRegister && registerInputs()}
      <button type='submit'>Login</button>
      <button onClick={() => setToggleRegister(!toggleRegister)}>
        {toggleRegister ? 'cancel' : 'register'}
      </button>
    </form>
  )
}

export default Login
