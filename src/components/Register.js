import { FormControl, Input,InputLabel, Button,Typography } from '@mui/material'
import React, { useState } from 'react'
import { CryptoState } from '../CryptoContext'
import { CreateWithEmailAndPassword } from './CryptoAuthentication'

const Register = (props) => {

const [userName,setUserName]=useState('')
const[password,setPassword]=useState('')
const {setAlert}=CryptoState()
const handleRegister=()=>{
  CreateWithEmailAndPassword(userName,password)
  setAlert({message:"User Registered successfully",open:true,severity:'success'})
}

  return (
    <>
     <FormControl sx={{width:'100%',marginTop:3,color:'whitesmoke'}}>
      <InputLabel sx={{color:'whitesmoke'}} htmlFor="my-input">Email address</InputLabel>
      <Input sx={{color:'whitesmoke'}} id="my-input" value={userName} onChange={(e)=>setUserName(e.target.value)} />
      {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
     </FormControl>
     <FormControl sx={{width:'100%',marginTop:3}}>
        <InputLabel sx={{color:'whitesmoke'}} htmlFor="component-simple">Password</InputLabel>
        <Input sx={{color:'whitesmoke'}} id="component-simple" type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </FormControl>
      <FormControl sx={{width:'100%',marginTop:3}}>
        <InputLabel sx={{color:'whitesmoke'}} htmlFor="txt_repwd">Re-enterPassword</InputLabel>
        <Input sx={{color:'whitesmoke',borderBottomColor:'white'}} id="txt_repwd" type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </FormControl>
      <FormControl sx={{width:'100%',marginTop:10,color:'white'}}>
      <Button sx={{width:'100%'}} variant='outlined' onClick={handleRegister}>Register</Button>
     <Typography variant='h6' sx={{marginTop:3}}>
      Already have an account &nbsp;
     
      <Button variant='text' onClick={()=>props.onRegr(0)}>Log In</Button>
     </Typography>
    </FormControl>
    </>
  )
}

export default Register
