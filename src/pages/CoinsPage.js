import { TextField,ThemeProvider,createTheme, Table, TableHead, TableBody, TableRow,TableCell, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api'
import { CryptoState } from '../CryptoContext'

function CoinsPage() {

  const[coins,setCoins]=useState([])
  const[searchTerm,setSearchTerm]=useState('')
  
  const {currency}=CryptoState()

  const fetchCoinList=async()=>{
    const {data}=await axios.get(CoinList(currency))
      console.log(data);
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
  const data= coins.filter((coin)=>coin.id.toLowerCase().includes(searchTerm)||
  coin.name.toLowerCase().includes(searchTerm))
  
  return data;
}

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Typography variant='h4' sx={{padding:1,height:50,display:"flex",flexDirection:"column",alignItems:"center"}}>
          Crypto Currency Details goes here....
        </Typography>
    <div style={{display:"flex",
          flexDirection:"column",
          alignItems:"center",color:"white",marginTop:10,padding:1}}>
      <TextField fullWidth label="search" placeholder='Search here...' onChange={(e)=>setSearchTerm(e.target.value)}/>
    </div>
    <div>
<Table>
  <TableHead>
    <TableRow>
   <TableCell>Crypto Currency</TableCell>
   <TableCell>Currency Name</TableCell>
   <TableCell>Market Percentage</TableCell>
   <TableCell>Market Rank</TableCell></TableRow>
  </TableHead>
  <TableBody>
    {coins&& handleSearch().map((coin,key)=>(
    <TableRow key={key}>
      <TableCell sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {coin.symbol}
        <img src={coin?.image} style={{height:50}} alt="coinimage"/>
        </TableCell>
      <TableCell>{coin.name}</TableCell>
      <TableCell>{coin.market_cap_change_percentage_24h.toFixed(2)}</TableCell>
      <TableCell>{coin.market_cap_rank}</TableCell>
    </TableRow>))}
  </TableBody>
</Table>
    </div>
    </Container>
    </ThemeProvider>
  )
}

export default CoinsPage