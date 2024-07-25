const TransactionInput = () => {
  return (
    <div>
      <label className="icon" htmlFor="add-todo-input" />
      <div>
        <input 
          id="add-todo-input" 
          type="text" 
          placeholder="新增工作" 
          value=""
        />
      </div>
      <div>
        <button className="btn-reset">新增</button>
      </div>
    </div>
  );
};

export default TransactionInput;
