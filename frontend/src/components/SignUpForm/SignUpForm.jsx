import { useState } from 'react'
import { signUp } from '../../utilities/users-api'

export default function SignUpForm({ setUser }) {
  const [credentials, setCredentials] = useState({username: '', email: '', password: '', confirm: ''})
  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value})
    setError('')
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const user = await signUp(credentials)
      setUser(user)
    } catch {
      setError('Log In Failed - Try again')
    }
  }
  
  return (
    <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
  )
}
