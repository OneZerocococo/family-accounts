import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Header } from './components';
import LoginPage from './pages/LoginPage';
import AccountsPage from './pages/AccountsPage'
import AddTransactionPage from './pages/AddTransactionPage'
import './App.css'
import { initializeLiff, getUserProfile } from './liffInit';


function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      await initializeLiff();
      const userProfile = await getUserProfile();
      setProfile(userProfile);
      setLoading(false);
    };
    fetchUserProfile();
  }, []);

  return (
    <div className="app">
      <Header profile={profile} loading={loading} />
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='accounts' element={<AccountsPage />} />
          <Route path='addOne' element={<AddTransactionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
