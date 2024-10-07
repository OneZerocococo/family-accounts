import axios from "axios"
const baseUrl = import.meta.env.VITE_API_URL

export const wakeUpServerApi = async () => {
  try {
    const response = await axios.get(`${baseUrl}/ping`)
    return response
  } catch (error) {
    console.error('Error waking up server:', error)
  }
}