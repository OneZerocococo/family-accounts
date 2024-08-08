import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types'

const TransactionCollection = ({ transactions }) => {
  return (
    <div>
      {transactions.map(transaction => {
        return <TransactionItem key={transaction.id} transaction={transaction} />
      })}
    </div>
  );
};

TransactionCollection.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      category_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionCollection;
