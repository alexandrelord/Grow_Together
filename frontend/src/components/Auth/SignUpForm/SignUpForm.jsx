import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../../utilities/users-api'
import Button from '../../Reusables/Button/Button'

export default function SignUpForm() {
  const [credentials, setCredentials] = useState({username: '', email: '', password: '', confirm: ''})
  const [error, setError] = useState('')
  let navigate = useNavigate()


  function handleChange(evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value})
    setError('')
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const user = await signUp(credentials)
      // if sign up successful remove credentials from state
      setCredentials({username: '', email: '', password: '', confirm: ''})
      // if sign up successful, redirect
      navigate('/plants')
    } catch {
      setError('Sign Up Failed - Try again')
    }
  }
  
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="username" value={credentials.username} placeholder='Username' onChange={handleChange} required />
        <input type="email" name="email" value={credentials.email} placeholder='Email' onChange={handleChange} required />
        <input type="password" name="password" value={credentials.password} placeholder='Password' onChange={handleChange} required />
        <input type="password" name="confirm" value={credentials.confirm} placeholder='Confirm' onChange={handleChange} required />
        <Button label='Sign Up'/>
      </form>
        
      <p>&nbsp;{error}</p>
    </>
  )
}
