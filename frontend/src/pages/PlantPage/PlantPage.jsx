import React from 'react'
import { logout } from '../../utilities/users-api'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../../components/Plants/Home/Home'


export default function PlantPage() {
  
  async function handleLogout(){
    try {
      const response = await logout()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='Plants'>
        <NavBar></NavBar>
        <Home></Home>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  )
}
