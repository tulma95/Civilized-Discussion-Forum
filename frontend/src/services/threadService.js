const axios = require('axios')

const baseUrl = '/api/threads'

const getAllThreads = async () => {
  return axios.get(baseUrl)
}

const createNewThread = async (category, title, creator) => {
  const data = {
    title,
    user_id: creator
  }
  return axios.post(`${baseUrl}/${category}`, data)
}

export default {
  getAllThreads,
  createNewThread
}
