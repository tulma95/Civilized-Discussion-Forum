const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN':
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

export default userReducer
