import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {login} from '../../api/authentication'
import useAuth from '../../hooks/useAuth'
import Button from '../Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export default function LoginForm() {
  const { auth, setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')


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

      <Box sx={{ marginTop: '50px' }}>
        <Stack 
          component='form'
          sx={{ width: '320px' }}
          spacing={2}
          autoComplete="off" 
          onSubmit={handleSubmit} 
        >
          <TextField
          variant='standard' 
          type="text" 
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}  
          value={username}
          autoFocus
          required 
          />
          <TextField 
          variant='standard'
          type="password" 
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}  
          value={password} 
          required 
          />
          <Button label='Log In' />
        </Stack>
        <p className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
      </Box>
  )
}
