import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AccountsPage from './pages/AccountsPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='accounts' element={<AccountsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
