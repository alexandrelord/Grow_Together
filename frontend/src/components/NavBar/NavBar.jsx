import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

export default function NavBar() {
  const [menu, showMenu] = useState('offscreen')
  
  return (
    <>
      <nav>
          <div className={style.elements}>
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
      <aside className={style.offscreen}>
        <Link to='/'>Home</Link>
        <Link to='myplants'>My Plants</Link>
      </aside>
    </>
  )
}
