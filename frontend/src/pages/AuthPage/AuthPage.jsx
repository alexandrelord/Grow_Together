import { useState } from 'react'
import style from './AuthPage.module.css'
import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm'
import LoginForm from '../../components/Auth/LoginForm/LoginForm'


export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true)
  
    return (
        <main>
            <div className={style.titleContainer}>
                <p>{showLogin ? 'Login to Grow Together' : 'Sign Up to Grow Together'}</p>
                <div className={style.account}>
                    <p>{showLogin ? 'Don\'t have an account?' : 'Have an account?'}</p>
                    <p className={style.showLogin} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</p>
                </div>
            </div>
                {showLogin ? <LoginForm/> : <SignUpForm/>}
        </main>
    )

}
