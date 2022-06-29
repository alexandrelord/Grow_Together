import { useState } from 'react'
import {login} from '../../utilities/users-api'

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
      <div>
        <div className="form-container" onSubmit={handleSubmit}>
          <form autoComplete="off" >
            <label>Username</label>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    )
  
}
