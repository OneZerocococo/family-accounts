import { Footer, ToAddTransactionPageBtn, TransactionCollection } from '../components'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTransactions } from '../api/transactions'

const AccountsPage = () => {
  const { group_id } = useParams()
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getTransactionsAsync = async () => {
      try {
        const transactions = await getTransactions(group_id)
        setTransactions(transactions.map(transaction => {
          return {
            ...transaction,
            isEdit: false
          }
        }))
      } catch (error) {
        console.error(error)
      }
    }
    getTransactionsAsync()
  }, [group_id])

  return (
    <>
      <div className='mt-10 w-full border-2 rounded-md mb-5 border-cyan-500'>
        <ToAddTransactionPageBtn
        />
        <TransactionCollection
          transactions={transactions}
        />
        <Footer />
      </div>
    </>
  )
}

export default AccountsPage
