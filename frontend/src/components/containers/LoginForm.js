import React from 'react'

const LoginForm = ({ toggleRegister, setToggleRegister, handleSubmit }) => {
  const registerInput = () => (
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
        {toggleRegister && registerInput()}
        <button type='submit'>{toggleRegister ? 'register' : 'login'}</button>
      </form>
      <button onClick={() => setToggleRegister(!toggleRegister)}>
        {toggleRegister ? 'cancel' : 'register'}
      </button>
    </div>
  )
}

export default LoginForm
