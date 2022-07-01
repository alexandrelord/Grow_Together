import './App.css';
// import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { getUser } from './utilities/users-services'
import { logout } from './utilities/users-api';
import AuthPage from './pages/AuthPage/AuthPage'
// import PlantList from './components/PlantList/PlantList'
import NavBar from './components/NavBar/NavBar';

export default function App() {

  async function handleLogout(){
    try {
      const response = await logout()
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <main className='App'>
        <NavBar/>
        <AuthPage/>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </main>
    )
  

}

