const TransactionItem = () => {
  return (
    <div className="item">
      <div className="task-item-body">
        <span className="task-item-body-text">Transaction</span>
        <input className="task-item-body-input" />
      </div>
      <div className="task-item-action ">
        <button className="btn-reset btn-destroy icon"></button>
      </div>
    </div>
  );
};

export default TransactionItem;