import axios from "axios"
const baseUrl = import.meta.env.VITE_API_URL

export const userLogin = async (userId) => {
  try {
    const res = await axios.post(`${baseUrl}/user/login`, { userId })
    return res.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return '401'
    }
    console.error('[Login failed]:', error)
  }
}

export const userRegister = async (userData) => {
  try {
    const registerResult = await axios.post(`${baseUrl}/user/register`, userData)
    return registerResult.data
  } catch (error) {
    console.error('[Register failed]:', error)
  }
}