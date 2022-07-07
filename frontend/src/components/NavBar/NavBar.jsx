import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

export default function NavBar() {
  const [menu, showMenu] = useState(false)
  
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
        <Link to='logout'>Logout</Link>
      </aside>
    </>
  )
}
