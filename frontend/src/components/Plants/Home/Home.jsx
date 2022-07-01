import React from 'react'
import style from './Home.module.css'

export default function Home() {
  return (
    <div className={style.card}>
        <div className={style.image}>
            <p>Looking for a plant to match yours?</p>
            <p>Take a photo and find a match!</p>
        </div>
        <div className={style.addPhoto}>

        </div>
    </div>
  )
}
