import {
   AppBar, MenuItem, Select, ThemeProvider, Toolbar, Typography,createTheme } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import SideDrawer from './SideDrawer';

function Header() {

let navigate=useNavigate()

function handleClick(){
  navigate("/")
}
const darkTheme=createTheme({
  palette:{
    mode:'dark'
  }
})
const {currency,symbol,setCurrency}=CryptoState()

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
  <Container>

 <Toolbar>
  <Typography sx={{
    flex:1,
    color:'gold',
    fontFamily:'Montserrat',
    fontWeight:'bold',
    cursor:'pointer',
    
  }} onClick={handleClick}  variant={'h5'}>
    Crypto Hunter

    
  </Typography>
  <Select  style={{
      width:100,
      height:40,
      marginRight:10
    }} value={currency} onChange={(e)=>setCurrency(e.target.value)}>
      <MenuItem value={"INR"}>INR</MenuItem>
      <MenuItem value={"USD"}>USD</MenuItem>
    </Select>
  <SideDrawer/>
</Toolbar>
   </Container>
    </AppBar></ThemeProvider>
  )
}

export default Header