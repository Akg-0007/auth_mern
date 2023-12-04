import React, { useRef, useState } from "react";
import "./Login.css";
import { useToast } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
// import apple from "../src/assets/apple.svg";
// import google from "../src/assets/google-icon.svg";
const Login = () => {
  const [data,setData]=useState({
    email:"",
    password:""
  });
  const toast = useToast();
  const toastIdRef=useRef();
  const navigate = useNavigate()
  const handleSignIn = async()=>{
    try{
      const res = await axios.post('https://scoutverse.onrender.com/auth/login',
      data,{
        headers:{"content-type":"application/json"}
      })
      console.log(res)
      if(res.data.error)toastIdRef.current = toast({description:res.data.error,status:'error'})
      else{
        toastIdRef.current = toast({description:"Logged In",status:'success!'})
        navigate('/')
        if(res.data.token)
        localStorage.setItem("token",res.data.token)
      }
    }
    catch (err) {
      toastIdRef.current = toast({ description: err.message, status: 'error' })
    }
  }

  return (
    <>
      <div className="SignIn1">
        <div className="RightSide"></div>
        <div className="LeftSide"></div>
        <div className="Board">SCOUT </div>
        <div className="LoginForm">
          <div className="SignIn2">
            <span className="span-1">Sign In</span>
            <span className="span-2">Sign in to your account</span>
          </div>

          <div className="google">
            <button>
              {/* <img src={google} alt="Google Logo" /> */}
              <span>Sign in with Google</span>
            </button>
            <button>
              {/* <img src={apple} alt="Apple Logo" /> */}
              <span>Sign in with Apple</span>
            </button>
          </div>

          <div className="card-1">
            <div className="email">
              <span>Email Address</span>
            </div>
            <div className="input-margin">
              <input
                type="email"
                className="input-email"
                id="emailInput"
                placeholder="Enter your email"
                value={data.email} onChange={(e)=> setData({...data,email:e.target.value})}
              />
            </div>

            <div className="email">
              <span>Password</span>
            </div>
            <div className="input-margin">
              <input
                type="password"
                className="input-email"
                id="passwordInput"
                placeholder="Enter your password" value={data.password} onChange={(e)=> setData({...data,password:e.target.value})}
              />
            </div>

            <div className="email">
              <span className="forget">Forget Password?</span>
            </div>

            <div className="email">
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          </div>

          <div className="dont">
            <span>Don’t have an account? </span>
            <span className="span-dont"><Link to="/signup">Register here Up</Link></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;