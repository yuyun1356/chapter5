import React, { useState } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { useUserAuth } from '../context/UserAuthContext'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const {logIn, googleSignIn}= useUserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    try{
      await logIn(email, password)
      navigate("/home");
    }catch(err){
      setError(err.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='login'>
      <h2>Login Form</h2>
      {error && <alert>{error}</alert>}
      <form onSubmit={handleSubmit}>
      <input 
          type='text' 
          placeholder='Email address' 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type='password'
          placeholder='Password address' 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button>Login</button>
      </form>
      <GoogleButton id='google' onClick={handleGoogleSignIn}/>
      <p>Doesn't have an account ? <Link to="/register" style={{color:'aqua'}}>register here</Link> </p>
    </div>
  )
}

export default Login