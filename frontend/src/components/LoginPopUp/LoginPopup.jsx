import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'

const LoginPopup = ({setShowLogin}) => {

    const {url,token,setToken} = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    }

    const onLogin = async(event) => {
        event.preventDefault();
        let newUrl = url;
        if(currState === "Log In") {
            newUrl += "/api/user/login";
        }
        else {
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }


  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
            </div>

            <div className="login-popup-inputs">
                {currState==="Log In"?<></>:
                <input name='name' onChange={onChangeHandler} value={data.name} 
                type="text" placeholder='Your name' required />}

                <input name='email' onChange={onChangeHandler} value={data.email}
                type="email" placeholder='Your email' required />

                <input name='password' onChange={onChangeHandler} value={data.password}
                type="password" placeholder='password' required />
            </div>
            <button type='submit' >
                {currState === "Sign Up" ? "Create Account":"Log In"}
            </button>

            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>

            {currState === "Log In"
            ?<p>Create a new Account? <span onClick={() => setCurrState("Sign Up")}
            >Click here</span></p>
            :<p>Already have a Account? <span onClick={() => setCurrState("Log In")}
            >Login Here</span></p>
            }
            
        </form>
    </div>
  )
}

export default LoginPopup