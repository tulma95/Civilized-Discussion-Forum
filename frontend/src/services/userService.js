import axios from 'axios'
const baseUrl = '/api/users'

const registerUser = async newUser => {
  try {
    const response = await axios.post(baseUrl, newUser)
    const data = await response.data
    return data
  } catch (error) {
    return error.response.data
  }
}

export default { registerUser }
