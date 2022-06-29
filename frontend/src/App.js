import './App.css';
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getUser } from './utilities/users-services'
import { logout } from './utilities/users-api';
import AuthPage from './pages/AuthPage/AuthPage'
import PlantList from './components/PlantList/PlantList'

export default function App() {
  const [user, setUser] = useState(getUser())

  async function handleLogout(){
    try {
      const response = await logout()
      setUser(getUser())
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <div className='App'>
        {user ? 
        <div>
        <h1>Logged in</h1>
        <PlantList></PlantList>
        <button onClick={handleLogout}>Logout</button>
        </div>
        :<AuthPage setUser={setUser}/>}
      </div>
    )
  

}

