import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../api/authentication'
import Button from '../Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

export default function SignUpForm() {
  const navigate = useNavigate()
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [errMsg, setErrMsg] = useState('')

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
          required 
         />
         <TextField
          variant='standard'  
          type="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
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
        <TextField
          variant='standard' 
          type="password"
          placeholder='Confirm Password'
          onChange={(e) => setConfirm(e.target.value)} 
          value={confirm}
          required 
          style={{ marginBottom: 10 }} 
         />
         <Button label='Sign Up'/>
       </Stack>
      
      <p className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
    </Box>
  )
}
