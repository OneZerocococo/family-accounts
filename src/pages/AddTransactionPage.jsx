import { useRef, useState } from 'react';
import { Header } from '../components';

const AddTransactionPage = () => {
  const [imgSrc, setImgSrc] = useState(null)
  const fileInputRef = useRef(null)
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

  return (
    <>
      <Header/>
      <div className="min-w-[350px] border-4 border-sky-500 p-4 bg-white rounded-md mt-8">
        <form className="grid" action="">
          <div className="form-item items-center flex  mb-3">
            <label className="mr-5">日期</label>
            <input type="date" className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700" />
          </div>
          <div className="form-item flex items-center mb-3">
            <label className="mr-5">類別</label>
            <select name="" id="" className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700">
              <option value="" disabled>請選擇</option>
              <option value="民生">民生</option>
              <option value="娛樂">娛樂</option>
              <option value="交通">交通</option>
            </select>
          </div>
          <div className="form-item items-center flex mb-3">
            <label className="mr-5">品項</label>
            <input type="text" className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700" />
          </div>
          <div className="form-item items-center flex mb-3">
            <label className="mr-5">金額</label>
            <input type="number" className="flex-grow p-1 border border-sky-300 rounded focus:outline-none focus:border-sky-700" />
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
          <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">確認送出</button>
        </form>
      </div>
    </>
  )
}

export default AddTransactionPage;