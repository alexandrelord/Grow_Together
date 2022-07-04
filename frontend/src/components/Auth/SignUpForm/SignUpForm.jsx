import {  useRef, useState, useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { signUp } from '../../../utilities/users-api'
import Button from '../../Reusables/Button/Button'


export default function SignUpForm() {
  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const usernameRef = useRef()
  const errRef = useRef()
  
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
      setAuth({username, password, response})
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
          // value={username}
          required 
         />
         <input 
          type="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} 
          // value={email}
          required 
         />
         <input 
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)} 
          // value={password}
          required 
         />
        <input 
          type="password"
          placeholder='Confirm Password'
          onChange={(e) => setConfirm(e.target.value)} 
          // value={confirm}
          required 
         />
         <Button label='Sign Up'/>
       </form>
      
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
    </section>
  )
}




// export default function SignUpForm() {
//   const [credentials, setCredentials] = useState({username: '', email: '', password: '', confirm: ''})
//   const [error, setError] = useState('')
//   let navigate = useNavigate()


//   function handleChange(evt) {
//     setCredentials({...credentials, [evt.target.name]: evt.target.value})
//     setError('')
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault()
//     try {
//       const user = await signUp(credentials)
//       // if sign up successful remove credentials from state
//       setCredentials({username: '', email: '', password: '', confirm: ''})
//       // if sign up successful, redirect
//       navigate('/plants')
//     } catch {
//       setError('Sign Up Failed - Try again')
//     }
//   }
  
//   return (
//     <>
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <input type="text" name="username" value={credentials.username} placeholder='Username' onChange={handleChange} required />
//         <input type="email" name="email" value={credentials.email} placeholder='Email' onChange={handleChange} required />
//         <input type="password" name="password" value={credentials.password} placeholder='Password' onChange={handleChange} required />
//         <input type="password" name="confirm" value={credentials.confirm} placeholder='Confirm' onChange={handleChange} required />
//         <Button label='Sign Up'/>
//       </form>
        
//       <p>&nbsp;{error}</p>
//     </>
//   )
// }
