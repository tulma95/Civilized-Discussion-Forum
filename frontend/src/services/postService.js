const axios = require('axios')

const baseUrl = '/api/posts'


const createNewPost = async (threadId, creator, file, content) => {
  const data = {
    thread_id: threadId,
    user_id: creator,
    image: file,
    content
  }
  const response = await axios.post(`${baseUrl}`, data)
  return response.data
}

export default {
  createNewPost
}