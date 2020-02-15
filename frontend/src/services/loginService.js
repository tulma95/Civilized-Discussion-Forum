import axios from 'axios'
const baseUrl = '/api/login'

const login = async credentials => {
  try {
    const response = await axios.post(baseUrl, credentials)
    return await response.data
  } catch (error) {
    return error.response.data
  }
}

export default { login }
