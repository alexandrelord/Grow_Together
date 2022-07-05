import React from 'react'
import style from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav>
        <div className={style.elements}>
            <div className={style.hamburgerMenu}>
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
  )
}
