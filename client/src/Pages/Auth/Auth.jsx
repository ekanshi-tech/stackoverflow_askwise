import React from 'react'
import './Auth.css'
import { useState } from 'react'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { login,signup } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Auth = () => {

  const [IsSignup ,SetIsSignup]=useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handle=()=>{
    SetIsSignup(!IsSignup)
  }

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit=(e) => {
    e.preventDefault()
    if(!email && !password){
      alert("Please enter the Email and Password");
    }
    if(IsSignup){
      if(!name){
        alert("Please enter the name to continue");
      }
      dispatch(signup({name,email,password},navigate))
    }
    else{
      dispatch(login({email,password},navigate))
    }
    
  }


  return (

    <section className='auth-section'>

      {IsSignup && <AboutAuth/>}

      <div className='auth-container'>
        {!IsSignup && <img src={icon} alt="icon" className='login-logo' />}
          

        <form onSubmit={handleSubmit}>

          {IsSignup && 
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/>
            </label>
          }

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" id='email' name='email' onChange={(e) => {setEmail(e.target.value)}} />
          </label>

          <label htmlFor="password">

            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h4>Password</h4>
            {!IsSignup && <p style={{color: "#007ac6",fontSize:"small"}}>Forgot Password</p> }
            </div>

            <input type="password" id="password" name='password' onChange={(e) => {setPassword(e.target.value)}}/>
          </label>

          {IsSignup && <p style={{ fontSize: "13px", color: "#666767" }}>Password must contain at at least eight <br /> characters,including at least 1 letter and 1 number </p>
        }

        {IsSignup && 
          <label htmlFor="check" className='check'>
            <input type="checkbox" name="check" id="check" />
            <p style={{fontSize:"13px"}}>Opt-in to receive occassional <br />product update ,user research invitation ,<br /> company announcements and digess </p>
          </label>
        }

          <button type='submit' className='auth-btn'>{IsSignup ? "SignUp" : "LogIn"}</button>
          {IsSignup && <p style={{ fontSize: "13px", color: "#666767" }}>By clicking "Sign-Up",you agree with our <span style={{color: "#007ac6"}}>terms of <br />services,privacy policy</span> and <span style={{color: "#007ac6"}}>cookie policy</span> </p>}

        </form>

        <p>
          {IsSignup ? "Alreaady have an Account" : "Don't have an Account ?"}
          <button type='button'className="handle-switch-btn" onClick={handle}>{IsSignup? "LogIn" : "SignUp"}</button>
          </p>

      </div>
    </section>
    
  )
}

export default Auth