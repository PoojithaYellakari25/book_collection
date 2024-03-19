import React, { useRef } from 'react'
import styles from './Signup.module.css';
import { validateForm } from './ValidateForm';
import { show } from './ShowPass';
import library from '../../Assets/login.png';
import register from '../../Assets/registration.png'
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const emailValue = useRef();
    const passValue = useRef();
    const passValue2 = useRef();

  return (
    <div className={styles.body}>
        <div className={styles.left}>
            <img className={styles.leftImage} src={library} alt="signup"/>
        </div>
        <div className={styles.right}>
            <img className={styles.rightImage} src={register}/>
            <h1>Create new account</h1>
            <form className={styles.data} onSubmit={(event)=>validateForm(event,emailValue,passValue,passValue2,navigate)} id="forms">
              <label htmlFor="email" className={styles.dataLabel}>Email or phone</label>
              <div className={styles.dataBox}>
                <input type="email" id="email" ref={emailValue} className={styles.input}/>
              </div>
              <label htmlFor="password" className={styles.dataLabel}>Password</label>
              <div className={styles.dataBox}>
                <input type="password" id="password" ref={passValue} className={styles.input}/>
                <button type="button" className={styles.password} onClick={()=>{show(passValue)}}>Show</button>
              </div>
              <label htmlFor="password2" className={styles.dataLabel}>Re-enter Password</label>
              <div className={styles.dataBox}>
                  <input type="password" id="password2" ref={passValue2} className={styles.input}/>
                  <button  type="button" className={styles.password} onClick={()=>{show(passValue2)}}>Show</button>
              </div>
              <button type="submit" className={styles.button} >SignUp</button>
            </form>
        <p className={styles.signup}>
        Already have an account? <a href="#" onClick={() => {navigate('/login')}}>Login</a>
        </p>

        </div>
    </div>
  )
}

export default Signup