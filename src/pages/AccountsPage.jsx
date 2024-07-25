import { Header, Footer, TransactionInput, TransactionCollection } from '../components';

const dummyTransactions = [
  {
    id: 1,
    date: '2024/07/20',
    categoryName: '民生',
    title: '瓦斯',
    amount: 600
  },
  {
    id: 2,
    date: '2024/07/22',
    categoryName: '民生',
    title: '第四台',
    amount: 499
  },
  {
    id: 3,
    date: '2024/07/23',
    categoryName: '餐飲',
    title: '家庭聚餐',
    amount: 1308
  },
  {
    id: 1,
    date: '2024/07/25',
    categoryName: '家電',
    title: '電風扇',
    amount: 780
  },
]
const AccountsPage = () => {
  
  return (
    <>
    <Header />
      <div className='mt-4 min-w-[350px] border-2 rounded-md min-h-64 p-5 mb-5 border-cyan-500'>
        <TransactionInput
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
