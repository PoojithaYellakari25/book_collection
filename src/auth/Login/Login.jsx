import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import library from '../../Assets/login.png'
import register from '../../Assets/registration.png'
import styles from './Login.module.css'
import { validateLogin } from './ValidateLogin'
import { show } from '../../auth/Register/ShowPass';

function Login() {
    const navigate = useNavigate();
    const emailValue = useRef();
    const passValue = useRef();
  return (
    <div className={styles.body}>
        <div className={styles.left}>
            <img className={styles.leftImage} src={library} alt="signup"/>
        </div>
        <div className={styles.right}>
            <img className={styles.rightImage} src={register}/>
            <h1>Login into your account</h1>
            <form className={styles.data} onSubmit={(event)=>{validateLogin(event,emailValue,passValue,navigate)}}>
                <label className={styles.dataLabel} htmlFor="email">Email or phone</label>
                <div className={styles.dataBox}>
                    <input type="email" id="email" ref={emailValue} className={styles.input}/>
                </div>
                <label htmlFor="pass" className={styles.dataLabel}>Password</label>
                <div className={styles.dataBox}>
                    <input type="password" id="pass" ref={passValue} className={styles.input} />
                    <button type="button" className={styles.password} onClick={()=>{show(passValue)}}>Show</button>
                </div>
                <div className={styles.signinbox}>
                    <a href="https://www.linkedin.com/uas/request-password-reset?trk=homepage-basic_forgot_password" className={styles.a}>
                        Forgot password?</a>
                    <button type="submit" className={styles.button}>Sign in</button>
                </div>
            </form>

            <p className={styles.login}>Create an account ? <a href="#" onClick={()=>{navigate('/')}}>Signup</a></p>
        </div>
    </div>
  )
}

export default Login