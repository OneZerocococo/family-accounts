import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Header } from './components'
import LoginPage from './pages/LoginPage'
import AccountsPage from './pages/AccountsPage'
import AddTransactionPage from './pages/AddTransactionPage'
import './App.css'
import { initializeLiff, getUserProfile } from './liffInit'
import { userLogin } from './api/user'


function App() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchUserProfile = async () => {
      await initializeLiff()
      const userProfile = await getUserProfile()
      console.log('userProfile: ', userProfile)
      // login
      const loginResult = await userLogin(userProfile.userId)
      console.log('登入結果: ', loginResult)
      setProfile(loginResult.userData)
      setLoading(false)
    }
    fetchUserProfile()
  }, [])


  return (
    <div className="app">
      <Header profile={profile} loading={loading} />
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='accounts/:group_id' element={<AccountsPage />} />
          <Route path='addOne/:group_id' element={<AddTransactionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
