import { useState } from 'react'
import style from './Home.module.css'
import Button from '../../Reusables/Button/Button'

export default function Home() {
    const [error, setError] = useState('')


    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            console.log('button working')
        //   const user = await login(credentials)
            
            // if login successful, redirect
        //   navigate('/plants')
        } catch {
            setError('Uploading image failed - Try again')
        }
    }
  
  
    return (
    <div className={style.card} onSubmit={handleSubmit} >
        <div className={style.image}>
            <p>Looking for a plant to match yours?</p>
            <p>Take a photo and find a match!</p>
        </div>
        <div className={style.addPhoto}>
            <form>
                
            </form>

        </div>
        <Button label='Upload' />
    </div>
  )
}
