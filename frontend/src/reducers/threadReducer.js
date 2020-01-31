const threadReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_THREAD':
      return [action.data, ...state]
    case 'FETCH_THREADS':
      return action.data
    case 'ADD_POST':
      const news = updatedThreads(state, action.data)
      return news
    // return updatedThreads(state, action.data)

    default:
      return state
  }
}

const updatedThreads = (state, post) => {
  return state.map(thread => {
    if (thread.id === post.threadId) {
      const newThread = { ...thread, posts: [...thread.posts, post] }
      return newThread
    }
    return thread
  })
}

export const addPost = (post, threadId) => {
  return {
    type: 'ADD_POST',
    data: post
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
