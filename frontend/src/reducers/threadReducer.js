const threadReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_THREAD':
      return [...state, action.data]
    default:
      return state
  }
}

export const addThread = (thread) => {
  return {
    type: 'ADD_THREAD',
    data: thread
  }
}

export default threadReducer