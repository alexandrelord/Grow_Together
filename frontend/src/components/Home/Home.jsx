import { useContext, useState } from 'react'
import style from './Home.module.css'
import Button from '../Reusables/Button/Button'
import AuthContext from '../../context/AuthProvider'

export default function Home() {
    // const { setAuth } = useContext(AuthContext)
  
    return (
        <section>
            <h1>Home</h1>
        </section>
    )
}




// <div className={style.card} /* onSubmit={handleSubmit} */ >
    //     <div className={style.image}>
    //         <p>Looking for a plant to match yours?</p>
    //         <p>Take a photo and find a match!</p>
    //     </div>
    //     <div className={style.addPhoto}>
    //         <form>
                
    //         </form>

    //     </div>
    //     <Button label='Upload' />
    // </div>