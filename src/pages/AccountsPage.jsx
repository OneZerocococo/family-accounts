import { Footer, ToAddTransactionPageBtn, TransactionCollection } from '../components';

const dummyTransactions = [
  {
    id: "1",
    date: '2024/07/20',
    categoryName: '民生',
    title: '瓦斯',
    amount: 600
  },
  {
    id: "2",
    date: '2024/07/22',
    categoryName: '民生',
    title: '第四台',
    amount: 499
  },
  {
    id: "3",
    date: '2024/07/23',
    categoryName: '餐飲',
    title: '家庭聚餐',
    amount: 1308
  },
  {
    id: "4",
    date: '2024/07/25',
    categoryName: '家電',
    title: '電風扇',
    amount: 780
  },
]
const AccountsPage = () => {
  
  return (
    <>
      <div className='mt-10 w-full border-2 rounded-md mb-5 border-cyan-500'>
        <ToAddTransactionPageBtn
        />
        <TransactionCollection
          transactions={dummyTransactions}
        />
        <Footer />
      </div>
    </>
  );
};

export default AccountsPage;
