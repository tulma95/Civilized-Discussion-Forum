const axios = require('axios')

const baseUrl = '/api/posts'


const createNewPost = async (threadId, creator, file, content) => {
  const data = {
    thread_id: threadId,
    user_id: creator,
    image: file,
    content
  }
  return await axios.post(`${baseUrl}`, data)
}

export default {
  createNewPost
}