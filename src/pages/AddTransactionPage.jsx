import { useRef, useState, useEffect } from 'react';
import { sendMessage } from '../liffInit';
import { getCategories, createTransaction } from '../api/transactions';
import { useParams, useNavigate } from 'react-router-dom';

const AddTransactionPage = () => {
  const { group_id } = useParams()
  const [categories, setCategories] = useState([])
  const [imgSrc, setImgSrc] = useState(null)
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const fileInputRef = useRef(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    const getCategoriesAsync = async () => {
      try {
        const categories = await getCategories()
        setCategories(categories)
      } catch (error) {
        console.error(error)
      }
    }
    getCategoriesAsync()
  }, [])



  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImgSrc(url)
    }
  }

  const handleClick = async () => {
    const selectedCategory = categories.find(category => category.id === categoryId)
    // 上傳圖片 
    const transaction = {
      // 圖片網址
      date,
      category: selectedCategory,
      description,
      amount,
      groupId: group_id
    }
    console.log('transaction: ', transaction)
    await createTransaction(transaction)
    await sendMessage(transaction)
    navigate(`/accounts/${group_id}`)
  }

  return (
    <>
      <div className="mt-10 w-full border-4 border-sky-500 p-4 bg-white rounded-md">
        <form className="grid" action="" onSubmit={event => event.preventDefault()}>
          <div className="form-item items-center flex  mb-3">
            <label className="mr-5">日期</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700"
            />
          </div>
          <div className="form-item flex items-center mb-3">
            <label className="mr-5">類別</label>
            <select
              value={categoryId}
              onChange={e => setCategoryId(e.target.value)}
              className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700"
            >
              <option value="" disabled>請選擇</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-item items-center flex mb-3">
            <label className="mr-5">品項</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700" />
          </div>
          <div className="form-item items-center flex mb-3">
            <label className="mr-5">金額</label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(parseFloat(e.target.value))}
              className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700"
            />
          </div>
          <div className="form-item items-center flex mb-3">
            <div
              className="flex flex-grow border-dashed border-2 border-sky-300 min-h-20 items-center text-center justify-center"
              onClick={handleDivClick}
            >
              {imgSrc ? (
                <img src={imgSrc} alt="Uploaded preview" className="max-h-40 object-cover" />
              ) : (
                '+ 上傳圖片'
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <button
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            確認送出
          </button>
        </form>
      </div>
    </>
  )
}

export default AddTransactionPage;