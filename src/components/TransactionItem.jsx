import PropTypes from 'prop-types'

const TransactionItem = ({ transaction }) => {
  return (
    <div className="task-item min-h-[52px] flex items-center relative break-words p-0 px-3 shadow-[0_17px_0_-16px_#e5e5e5] flex-wrap">
      <div className="task-item-body flex justify-between w-full">
        <div className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-1 items-center">
          <span className="task-item-body-date mr-1">{transaction.date}</span>
          <span className="task-item-body-category mr-1">{transaction.categoryName}</span>
          <span className="task-item-body-text mr-1">{transaction.title}</span>
          <span className="task-item-body-amount mr-1">{transaction.amount}</span>
        </div>
        <div>
          <button className="mr-1 bg-sky-700 text-white font-bold py-2 px-4 rounded">修改</button>
        </div>
      </div>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: 
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      categoryName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
};

export default TransactionItem;