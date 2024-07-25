import { Header, Footer, TransactionInput, TransactionCollection } from '../components';

const AccountsPage = () => {
  return (
    <>
    <Header />
      <div className='mt-4 min-w-[350px] border-2 rounded-md min-h-64 p-5 mb-5 border-cyan-500'>
        <TransactionInput
        />
        <TransactionCollection
        />
        <Footer />
      </div>
    </>
  );
};

export default AccountsPage;
