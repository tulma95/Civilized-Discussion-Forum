const threadReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_THREAD':
      return [action.data, ...state]
    case 'FETCH_THREADS':
      return action.data
    default:
      return state
  }
}

export const fetchThreads = threads => {
  return {
    type: 'FETCH_THREADS',
    data: threads
  }
}

export const addThread = thread => {
  return {
    type: 'ADD_THREAD',
    data: thread
  }
}

export default threadReducer
