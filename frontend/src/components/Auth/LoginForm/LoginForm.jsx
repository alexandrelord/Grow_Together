import { useState } from 'react'
import {login} from '../../../utilities/users-api'

export default function LoginForm() {
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
      // if login successful remove credentials from state
      setCredentials({username: '', password: ''})
      // if login successful, redirect to "start matching" component
    } catch {
      setError('Log In Failed - Try again')
    }
  }

    return (
      <>
          <form autoComplete="off" onSubmit={handleSubmit} >
            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder='Username' required />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder='Password' required />
            <button type="submit">LOG IN</button>
          </form>
        
          <p>&nbsp;{error}</p>
      </>
    )
  
}
