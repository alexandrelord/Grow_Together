import { useState } from 'react'
import SignUpForm from '../../components/Auth/SignUpForm'
import LoginForm from '../../components/Auth/LoginForm'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'


export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true)
  
    return (
        <>
            <Container 
            maxWidth='sm' 
            sx={{ 
                display: 'flex', 
                flexDirection:'column', 
                // justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: '150px' 
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h5'>{showLogin ? 'Log In to Grow Together' : 'Sign Up to Grow Together'}</Typography>
                    <Stack direction='row' spacing={1} >
                        <Typography variant='body2'>{showLogin ? 'Don\'t have an account?' : 'Have an account?'}</Typography>
                        <Typography variant='body2' sx={{ cursor: 'pointer' }} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</Typography>
                    </Stack>
                </Box>

                {showLogin ? <LoginForm /> : <SignUpForm />}
            </Container>
        </>
    )

}
