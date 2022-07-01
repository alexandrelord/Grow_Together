import './App.css';
// import { useState, useEffect} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import PlantPage from './pages/PlantPage/PlantPage';


export default function App() {

    return (
      <main className='App'>
        <Routes>
          <Route exact path='/' element={<AuthPage />}/>
          <Route path='/plants' element={<PlantPage />}/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </main>
    )
  

}

