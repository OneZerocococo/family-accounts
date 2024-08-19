import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL

export const getTransactions = async (groupId, startDate, endDate) => {
  const now = new Date()
  startDate = startDate || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  endDate = endDate || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(lastDayOfMonth).padStart(2, '0')}`
  try {
    const res = await axios.get(`${baseUrl}/transactions/${groupId}?startDate=${startDate}&endDate=${endDate}`)
    return res.data;
  } catch (error) {
    console.error('[Get transactions failed]: ', error)
  }
}

export const getBalance = async (groupId, endDate) => {
  try {
    const res = await axios.get(`${baseUrl}/transactions/getBalance/${groupId}?endDate=${endDate || ''}`)
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

export const createTransaction = async (transactionData) => {
  try {
    const res = await axios.post(`${baseUrl}/transactions`, transactionData)
    return res.data
  } catch (error) {
    console.error('[Create transaction failed]: ', error)
  }
}