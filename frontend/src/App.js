import './App.css';
import { useState, useEffect} from 'react'
import { getUser } from './utilities/users-services'
import { Link } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import PlantList from './components/PlantList/PlantList'

export default function App() {
  const [user, setUser] = useState(getUser())

    return (
      <div className='App'>
        {user ? 
        <div>
        <h1>Logged in</h1>
        <PlantList></PlantList>
        </div>
        :<AuthPage setUser={setUser}/>}
      </div>
    )
  

}

