import React, { useState } from 'react'
import logInService from '../../services/userService'
import './login.scss'

const Login = () => {
  const username = React.createRef()
  const password = React.createRef()
  const retypePassword = React.createRef()
  const [toggleRegister, setToggleRegister] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
    }
    if (toggleRegister) {
      register(user)
    } else {
      login()
    }
    username.current.value = ''
    password.current.value = ''
    retypePassword.current.value = ''
  }

  const login = () => {}

  const register = user => {
    logInService.registerUser(user)
  }

  const validate = () => {
    if (!retypePassword.current) return
    if (password.current.value !== retypePassword.current.value) {
      retypePassword.current.setCustomValidity('Password must match')
    } else {
      password.current.setCustomValidity('')
      retypePassword.current.setCustomValidity('')
    }
  }

  const registerInputs = () => (
    <input
      minLength='5'
      required
      placeholder='retype password'
      ref={retypePassword}
      type='password'
      onChange={validate}
    />
  )

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          minLength='3'
          ref={username}
          placeholder='username'
          style={{ width: '100%' }}
          type='text'
        />
        <input
          required
          minLength='5'
          ref={password}
          placeholder='password'
          style={{ width: '100%' }}
          type='password'
          onChange={validate}
        />
        {toggleRegister && registerInputs()}
        <button type='submit'>{toggleRegister ? 'register' : 'login'}</button>
      </form>
      <button onClick={() => setToggleRegister(!toggleRegister)}>
        {toggleRegister ? 'cancel' : 'register'}
      </button>
    </div>
  )
}

export default Login
