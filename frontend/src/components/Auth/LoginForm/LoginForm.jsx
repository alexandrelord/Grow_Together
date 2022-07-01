import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {login} from '../../../utilities/users-api'
import Button from '../../Reusables/Button/Button'

export default function LoginForm({ setToken }) {
  const [credentials, setCredentials] = useState({ username: '', password: ''})
  const [error, setError] = useState('')
  let navigate = useNavigate()

  
  function handleChange(evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value})
    setError('')
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const user = await login(credentials)
      // if login successful remove credentials from state - necessary??
      setCredentials({username: '', password: ''})
      // if login successful, redirect
      navigate('/plants')
    } catch {
      setError('Log In Failed - Try again')
    }
  }

    return (
      <>
          <form autoComplete="off" onSubmit={handleSubmit} >
            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder='Username' required />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder='Password' required />
            <Button label='Log In' />
          </form>
        
          <p>&nbsp;{error}</p>
      </>
    )
  
}
