import { useNavigate, useParams } from 'react-router-dom';

const ToAddTransactionPageBtn = () => {
  const { group_id } = useParams()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/addOne/${group_id}`)
  }
  return (
    <div className="my-5">
      <button
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >新增一筆紀錄</button>
    </div>
  )
}

export default ToAddTransactionPageBtn
