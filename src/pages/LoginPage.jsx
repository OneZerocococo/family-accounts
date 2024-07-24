const LoginPage = () => {
  return (
    <>
      <div className="border-2 rounded-md min-h-64 p-5 mb-5 border-cyan-500">
        <h1 className="text-3xl font-bold my-5">家庭帳本</h1>
        <label>ID:</label>
        <input className="mx-1 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300"></input>
        <div className="p-2 mt-8">
          <button className="mx-1">登入</button>
          <button>註冊</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;