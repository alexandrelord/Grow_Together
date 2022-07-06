import {  useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../api/authentication'
import Button from '../Reusables/Button/Button'


export default function SignUpForm() {

  const navigate = useNavigate()

  const usernameRef = useRef()
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      if (password !== confirm) {
        // setErrMsg("Passwords Don't Match")
      }
      const response = await signUp({username, email, password})
    
      setUsername('')
      setPassword('')
      setEmail('')
      navigate('/')
    } catch (error) {
      if(!error?.response) {
        setErrMsg('No Server Response')
      } else if (error.response?.status === 409) {
        setErrMsg('Missing Username or Password')
      }  else {
        setErrMsg('Sign Up Failed')
      }
    }

  }

  return (
    <section>
      <form autoComplete="off" onSubmit={handleSubmit}>
         <input 
          type="text"
          placeholder='Username'
          ref={usernameRef} 
          onChange={(e) => setUsername(e.target.value)} 
          value={username}
          required 
         />
         <input 
          type="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          required 
         />
         <input 
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          required 
         />
        <input 
          type="password"
          placeholder='Confirm Password'
          onChange={(e) => setConfirm(e.target.value)} 
          value={confirm}
          required 
         />
         <Button label='Sign Up'/>
       </form>
      
      <p className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
    </section>
  )
}
