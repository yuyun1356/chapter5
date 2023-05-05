import React, { useState } from 'react'
import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const {signUp}= useUserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    try{
      await signUp(email, password)
      navigate("/")
    }catch(err){
      setError(err.message)
    }
  }


  return (
    <div className='register'>
      <h2>Register Form</h2>
      {error && <alert variant="danger">{error}</alert>}
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
        <button>register</button>
      </form>
      <p>already have an account ? <Link to="/">login here</Link> </p>
    </div>
  )
}

export default Register