import React, { useState } from 'react'
import { connect } from 'react-redux'
import userService from '../../services/userService'
import loginService from '../../services/loginService'
import { logInUser } from '../../reducers/userReducer'
import './login.scss'

const Login = props => {
  const [toggleRegister, setToggleRegister] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const { username, password, rePassword } = event.target
    const user = {
      username: username.value,
      password: password.value
    }
    toggleRegister ? register(password, rePassword, username) : loggain(user)
  }

  const resetFields = (...fields) => {
    const resetValue = field => {
      field.value = ''
    }
    fields.forEach(resetValue)
  }

  const loggain = async credentials => {
    const response = await loginService.login(credentials)
    if (response.error) {
      handleMessage(response.error)
    } else {
      props.logInUser(response)
    }
  }

  const handleMessage = message => {
    setMessage(message)
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  const register = async (password, rePassword, username) => {
    const response = validatePassword(password.value, rePassword.value)
      ? await userService.registerUser({
          username: username.value,
          password: password.value
        })
      : { error: 'Passwords must match' }
    if (response.error) {
      handleMessage(response.error)
    } else {
      resetFields(username, password, rePassword)
      handleMessage('Succesfully registered')
    }
  }

  const validatePassword = (password, rePassword) => {
    return password.value === rePassword.value
  }

  const registerInputs = () => (
    <input name='rePassword' placeholder='retype password' type='password' />
  )

  return (
    <div>
      <form noValidate={!toggleRegister} onSubmit={handleSubmit}>
        <input
          name='username'
          required
          minLength='3'
          placeholder='username'
          type='text'
        />
        <input
          name='password'
          required
          minLength='5'
          placeholder='password'
          type='password'
        />
        {toggleRegister && registerInputs()}
        <button type='submit'>{toggleRegister ? 'register' : 'login'}</button>
      </form>
      <button onClick={() => setToggleRegister(!toggleRegister)}>
        {toggleRegister ? 'cancel' : 'register'}
      </button>
      <div>{message}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logInUser
}

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectedLogin
