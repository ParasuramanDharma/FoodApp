import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
export const LoginPopup = ({setShowLogin}) => {

    const [currstate , setCurrState] = useState("Login")
 
  return (

    <div className='Login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h1>{currstate}</h1>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==="Login"?<></>:<input type="text" placeholder='your name' required/>}
                <input type="email" placeholder='your email' required/>
                <input type="password" placeholder='your password' required/>
            </div>
            <button>{currstate==="SignUp"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By Continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currstate==="Login"
            ?<p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> 
            :<p>Already have an account?  <span onClick={() => setCurrState("Login")}>Login here</span> </p>
            }
        </form>
    </div>
  )
}
