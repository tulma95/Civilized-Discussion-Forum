import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userService from '../../services/userService'
import loginService from '../../services/loginService'
import { logInUser, logoutUser } from '../../reducers/userReducer'
import './UserHandler.scss'
import LoginForm from './LoginForm'

const UserHandler = () => {
  const [message, setMessage] = useState('')
  const [toggleRegister, setToggleRegister] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state).user

  const handleSubmit = async event => {
    event.preventDefault()
    const { username, password, rePassword } = event.target
    const user = {
      username: username.value,
      password: password.value
    }
    toggleRegister ? register(password, rePassword, username) : login(user)
  }

  const login = async credentials => {
    const response = await loginService.login(credentials)
    if (response.error) {
      handleMessage(response.error)
    } else {
      window.localStorage.setItem('loggedUser', JSON.stringify(response))
      dispatch(logInUser(response))
    }
  }

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    dispatch(logoutUser())
  }

  const register = async (password, rePassword, username) => {
    const response = validatePassword(password.value, rePassword.value)
      ? await userService.registerUser({
          username: username.value,
          password: password.value
        })
      : { error: 'Passwords must match' }
    console.log(response)
    if (response.error) {
      handleMessage(response.error)
    } else {
      resetFields(username, password, rePassword)
      handleMessage('Succesfully registered')
    }
  }

  const resetFields = (...fields) => {
    const resetValue = field => {
      field.value = ''
    }
    fields.forEach(resetValue)
  }

  const validatePassword = (password, rePassword) => {
    return password === rePassword
  }

  const handleMessage = message => {
    setMessage(message)
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  const loggedUserInfo = () => (
    <div>
      <div>Logged in as {user.username}</div>
      <button onClick={logout}>Logout</button>
    </div>
  )

  return (
    <div>
      {user ? (
        loggedUserInfo()
      ) : (
        <LoginForm
          toggleRegister={toggleRegister}
          setToggleRegister={setToggleRegister}
          handleSubmit={handleSubmit}
        />
      )}
      {message}
    </div>
  )
}

export default UserHandler
