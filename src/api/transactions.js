import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL

export const getTransactions = async (groupId) => {
  try {
    const res = await axios.get(`${baseUrl}/transactions/${groupId}`)
    return res.data;
  } catch (error) {
    console.error('[Get transactions failed]: ', error)
  }
};

export const getBalance = async (groupId, endDate) => {
  try {
    const res = await axios.get(`${baseUrl}/getBalance/${groupId}?endDate=${endDate || ''}`)
    return res.data.balance;
  } catch (error) {
    console.error('[Get balance failed]: ', error)
  }
}

export const getCategories = async () => {
  try {
    const res = await axios.get(`${baseUrl}/categories`)
    return res.data
  } catch (error) {
    console.error('[Get categories failed]: ', error)
  }
}