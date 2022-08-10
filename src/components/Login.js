import { Button,Typography,TextField } from '@mui/material'
import React, { useState } from 'react'
import { CryptoState } from '../CryptoContext'
import GoogleButton from 'react-google-button'
import { auth } from '../config/firebaseConfig'
import { googleAuth } from './GoogleAuthLogin'
import { LoginWithEmailandPassword } from './CryptoAuthentication'


const Login = (props) => {

const [email,setEmail]=useState('')
const[password,setPassword]=useState('')
const {setAlert}=CryptoState()
const handleAlert=()=>{
 LoginWithEmailandPassword(email,password)
 
  setAlert({message:"Login successfull",open:true,severity:'success'})
}

  return (
    <>
     
     <TextField value={email} onChange={(e)=>setEmail(e.target.value)}  sx={{marginTop:5}} id="email" label="Email"  fullWidth/>
     <TextField value={password} onChange={(e)=>setPassword(e.target.value)} sx={{marginTop:5}} id="pwd" type="password" label="Password"  fullWidth/>
     <Button sx={{marginTop:5}} variant='outlined' fullWidth onClick={handleAlert}>Log In</Button>
     
     <GoogleButton onClick={()=>googleAuth(auth)} />
     <Typography variant='h6' sx={{marginTop:3,color:'white'}}>
      Don't have an account &nbsp;
      <Button variant='text' onClick={()=>props.onRegr(1)}>Sign Up</Button>
     </Typography>
     
    </>
  )
}

export default Login
