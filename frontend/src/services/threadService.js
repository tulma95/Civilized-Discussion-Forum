import axios from 'axios'
const baseUrl = '/api/threads'

const getAllThreads = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getThreadsByCategory = async category => {
  const response = await axios.get(`${baseUrl}/${category}`)
  const data = response.data
  return data
}

const createNewThread = async (category, title, creator, file, content) => {
  const data = {
    title,
    user_id: creator,
    image: file,
    content
  }
  console.log(category)

  return await axios.post(`${baseUrl}/${category}`, data)
}

const getSingleThread = async (category, id) => {
  const response = await axios.get(`${baseUrl}/${category}/${id}`)
  return response.data
}

export default {
  getAllThreads,
  createNewThread,
  getSingleThread,
  getThreadsByCategory
}
