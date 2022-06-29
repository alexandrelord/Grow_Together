import { useState } from 'react'
import { signUp } from '../../../utilities/users-api'

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
            
            <input type="text" name="username" value={credentials.username} placeholder='Username' onChange={handleChange} required />
            <input type="email" name="email" value={credentials.email} placeholder='Email' onChange={handleChange} required />
            <input type="password" name="password" value={credentials.password} placeholder='Password' onChange={handleChange} required />
            <input type="password" name="confirm" value={credentials.confirm} placeholder='Confirm' onChange={handleChange} required />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
  )
}
