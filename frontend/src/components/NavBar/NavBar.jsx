import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../api/authentication'
import useAuth from '../../hooks/useAuth'
import style from './NavBar.module.css'

export default function NavBar() {
  const { setAuth } = useAuth()
  const navigate = useNavigate()
  
  const [menu, showMenu] = useState(false)
  
  const handleClick = async (e) => {
    e.preventDefault()

    try {
      const response = await logout()
      if (response === 'success') {
        setAuth({})
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
    } 
  }

  return (
    <>
      <nav>
          <div className={style.container}>
              <div className={style.hamburgerMenu} onClick={() => showMenu(!menu) }>
                  <span className={style.dot}></span>
                  <span className={style.dot}></span>
                  <span className={style.dot}></span>
              </div>
              <div className={style.title}>
                  <h3>Grow Together</h3>
                  <div className={style.logo}></div>
              </div>
          </div>
      </nav>
      <aside className={menu ? style.active : style.offscreen} onClick={() => showMenu(!menu) }>
        <Link to='/'>Home</Link>
        <Link to='myplants'>My Plants</Link>
        <Link to='/login' onClick={handleClick}>Logout</Link>
      </aside>
    </>
  )
}