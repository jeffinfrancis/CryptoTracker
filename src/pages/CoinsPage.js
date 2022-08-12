import { TextField,ThemeProvider,createTheme, Table, TableHead, TableBody, TableRow,TableCell, Typography, Pagination, LinearProgress } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api'
import { CryptoState } from '../CryptoContext'
import {Link} from 'react-router-dom'

function CoinsPage() {

  const[coins,setCoins]=useState([])
  const[searchTerm,setSearchTerm]=useState('')
  const[pageNumber,setPageNumber]=useState(1)
  
  const {currency,symbol}=CryptoState()

  const fetchCoinList=async()=>{
    const {data}=await axios.get(CoinList(currency))
      
      setCoins(data)
  }

  useEffect(()=>{
    fetchCoinList()
  },[currency])

  const darkTheme=createTheme({
    palette:{
      mode:'dark'
    }
  })

const handleSearch=()=>{
  
  const data= coins.filter(
    (coin)=>
    coin.symbol.toLowerCase().includes(searchTerm)||
    coin.name.toLowerCase().includes(searchTerm)
    )
   
    return data;
}

const numberWithCommas=(num)=>{
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

if(!coins) return <LinearProgress color='gold'/>

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Typography variant='h4' sx={{fontFamily:"Montserrat",padding:1,height:50,display:"flex",flexDirection:"column",alignItems:"center"}}>
          Crypto Currency by Market Cap
        </Typography>
    <div style={{display:"flex",
          flexDirection:"column",
          alignItems:"center",color:"white",marginTop:10,padding:5}}>
      <TextField fullWidth label="Search for a crypto currency" onChange={(e)=>
        {
          setSearchTerm(e.target.value)
          setPageNumber(1)
        }}/>
    </div>
    <div>
<Table>
  <TableHead style={{backgroundColor:"#EEBC1D"}}>
    <TableRow>
      {["Coin","Price","24h Change","Market Cap"].map((head)=>(
        <TableCell
        style={{
          color:"black",
          fontWeight:"700",
          fontFamily:"Montserrat"
        }}
        key={head}
        // align={head==="Coin"?"":"right"}
        >{head}</TableCell>
        ))}
   </TableRow>
  </TableHead>
  <TableBody>
    { handleSearch()
    .slice((pageNumber - 1) * 10, pageNumber * 10)
    .map((coin,key)=>{
      let profit=coin?.market_cap_change_percentage_24h>=0
    return (
    <TableRow key={key}>
      <TableCell sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        
        <Link to={`/coins/${coin.id}`}>
        <img src={coin?.image} style={{height:50}} alt="coinimage"/></Link>
       <span style={{
        fontFamily:"montserrat",
        fontSize:"15px",
        fontWeight:"bold",
        display:"flex",
       flexDirection:"row",
       alignItems:"center"
        }}>{coin.name}</span> 
        <span style={{
        fontFamily:"montserrat",
        fontSize:"40",
        display:"flex",
       flexDirection:"row",
       alignItems:"center"
        }}>{coin.symbol}</span> 
        </TableCell>
      <TableCell>{symbol}{" "}{numberWithCommas(coin.current_price.toFixed(2))}</TableCell>
      <TableCell style={{color:profit?"green":"red"}}>{profit&& "+ "}{coin.market_cap_change_percentage_24h.toFixed(2)}</TableCell>
      <TableCell>{symbol}{numberWithCommas(coin.market_cap).slice(0,-6)}M</TableCell>
    </TableRow>)})}
  </TableBody>
</Table>
<Pagination onChange={(_,value)=>{
setPageNumber(value);
window.scroll(0,450)
}}
  //(e)=>setPageNumber(e.target.textContent)
   count={Number((coins?.length/10).toFixed(0)||0)}/>
    </div>
    </Container>
    </ThemeProvider>
  )
}

export default CoinsPage