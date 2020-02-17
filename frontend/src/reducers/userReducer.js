const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return action.data
    default:
      return state
  }
}

export const logInUser = user => {
  return {
    type: 'LOGIN',
    data: user
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT',
    data: ''
  }
}

export default userReducer
