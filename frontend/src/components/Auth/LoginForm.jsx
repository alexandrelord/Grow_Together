import { useRef, useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom'
import {login} from '../../api/authentication'
import Button from '../Reusables/Button/Button'

export default function LoginForm() {
  const { auth, setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const usernameRef = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
      const response = await login({username, password})
      setAuth({ username, token: response })
      setUsername('')
      setPassword('')
      navigate(from, { replace: true })

    } catch (error) {
      if(!error?.response) {
        setErrMsg('No Server Response')
      } else if (error.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (error.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
    }

  }
  
  return (

    <section>
      <form autoComplete="off" onSubmit={handleSubmit} >
        <input 
        type="text" 
        placeholder='Username'
        ref={usernameRef} 
        onChange={(e) => setUsername(e.target.value)}  
        value={username} 
        required 
        />
        <input 
        type="password" 
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}  
        value={password} 
        required 
        />
        <Button label='Log In' />
      </form>
      <p className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
    </section>
  )
}
