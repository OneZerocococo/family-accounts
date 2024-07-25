const TransactionItem = () => {
  return (
    <div className="task-item min-h-[52px] flex items-center relative break-words p-0 px-3 shadow-[0_17px_0_-16px_#e5e5e5] flex-wrap">
      <div className="task-item-body flex justify-between w-full">
        <div className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-1 items-center">
          <span className="task-item-body-date mr-1">7/23</span>
          <span className="task-item-body-category mr-1">民生</span>
          <span className="task-item-body-text mr-1">瓦斯費</span>
          <span className="task-item-body-amount mr-1">600</span>
        </div>
        <div>
          <button className="mr-1 bg-sky-700 text-white font-bold py-2 px-4 rounded">修改</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;