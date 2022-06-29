import { useState } from 'react'
import {login} from '../../../utilities/users-api'
import style from './LoginForm.module.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ username: '', password: ''})
  const [error, setError] = useState('')
  
  function handleChange(evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value})
    setError('')
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const user = await login(credentials)
      setUser(user)
    } catch {
      setError('Log In Failed - Try again')
    }
  }

    return (
      <>
      {/* <div className={style.loginTitle}>
        <p>Log in to Grow Together</p>
        <p className={style.noAccount}>Don't have an account?</p>
      </div> */}

        <div className={style.formContainer} onSubmit={handleSubmit}>
          <form autoComplete="off" >
            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder='Username' required />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder='Password' required />
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </>
    )
  
}
