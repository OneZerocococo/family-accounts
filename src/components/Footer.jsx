import { getBalance } from '../api/transactions.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Footer = () => {
  const { group_id } = useParams()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const getBalanceAsync = async () => {
      try {
        const balance = await getBalance(group_id)
        setBalance(balance)
      } catch (error) {
        console.error(error)
      }
    }
    getBalanceAsync()
  }, [group_id])
  
  return (
    <footer className="flex justify-between px-4">
      <p className="text-sm font-light my-8">
        餘額： <span>{balance.toLocaleString('en-US')}</span>
      </p>
    </footer>
  );
};

export default Footer;
