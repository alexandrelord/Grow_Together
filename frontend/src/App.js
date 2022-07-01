import './App.css';
import { useState, useEffect} from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import PlantPage from './pages/PlantPage/PlantPage';
import LoginForm from './components/Auth/LoginForm/LoginForm';


export default function App() {
  const [token, setToken] = useState()
  
  if (!token) {
    return <AuthPage setToken={setToken} />
  }



    return (
      <main className='App'>
        <Routes>
          <Route path='/plants' element={<PlantPage />}/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </main>
    )
  

}

