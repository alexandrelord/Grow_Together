import { useRef, useState, useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {login} from '../../../utilities/users-api'
import Button from '../../Reusables/Button/Button'

export default function LoginForm() {
  const { auth, setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const usernameRef = useRef()
  const errRef = useRef()

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
      setAuth({username, password, access: response})
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
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
    </section>
  )
}





// export default function LoginForm({ setToken }) {
//   const [credentials, setCredentials] = useState({ username: '', password: ''})
//   const [error, setError] = useState('')
//   let navigate = useNavigate()

  
//   function handleChange(evt) {
//     setCredentials({...credentials, [evt.target.name]: evt.target.value})
//     setError('')
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault()
//     try {
//       const user = await login(credentials)
//       // if login successful remove credentials from state - necessary??
//       setCredentials({username: '', password: ''})
//       // if login successful, redirect
//       navigate('/plants')
//     } catch {
//       setError('Log In Failed - Try again')
//     }
//   }

//     return (
//       <>
//           <form autoComplete="off" onSubmit={handleSubmit} >
//             <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder='Username' required />
//             <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder='Password' required />
//             <Button label='Log In' />
//           </form>
        
//           <p>&nbsp;{error}</p>
//       </>
//     )
  
// }
