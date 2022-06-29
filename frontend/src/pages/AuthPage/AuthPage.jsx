import { useState } from 'react'
import style from './AuthPage.module.css'
import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm'
import LoginForm from '../../components/Auth/LoginForm/LoginForm'


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true)
  
    return (
        <main>
            <div className={style.loginTitle}>
                <p>Log in to Grow Together</p>
                <div className={style.noAccount}>
                    <p>Don't have an account?</p>
                    <p className={style.showLogin} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</p>
                </div>
            </div>
            {/* <div>
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
            </div> */}
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>}
        </main>
    )

}
