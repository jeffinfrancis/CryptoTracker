import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api';
import {LinearProgress, Typography} from '@mui/material'
import CoinChart from '../components/CoinChart';
import { CryptoState } from '../CryptoContext';
import parse from 'html-react-parser'

const CoinPage = () => {
    const {id}=useParams()
    
    const [singleCoin,setSingleCoin]=useState({})

    const {symbol,currency}=CryptoState()

    const fetchSingleCoin=async()=>{
       const {data}=await axios.get(SingleCoin(id))
       setSingleCoin(data)
       
    }
    useEffect(()=>{
        fetchSingleCoin();
       
    },[])
    const numberWithCommas=(num)=>{
      return !singleCoin?0:num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const styles ={
      container :{
        display:"flex",
       
        
      },
      sidebar:{
           width:'30%',
           display:"flex",
           flexDirection:"Column",
           alignItems:"center",
           height:"300",
           marginTop:25,
           borderRight:"2px solid grey",
           padding:1
      }
      

    }


  return (
    <div>
    {!singleCoin?(<LinearProgress color='gold'/>):
    <div style={styles.container}>
  <div style={styles.sidebar}>
  <img
        src={singleCoin?.image?.large}
        height="200" alt='coin'
    style={{marginBottom:20}}
        />
         <Typography gutterBottom variant="h3" component="div">
          {singleCoin.id}
        </Typography>
        <Typography variant="body2" color="white">
         {(singleCoin?.description?.bg?.split('.')[0])}
         
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Rank : {singleCoin?.market_cap_rank}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Current Price : {symbol}{" "}{singleCoin?.market_data?.current_price[currency.toLowerCase()]}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Market Cap : {symbol}{" "}{numberWithCommas(Number(singleCoin?.market_data?.market_cap[currency.toLowerCase()]))?.slice(0,-6)}M
        </Typography>
  </div>
    
       {singleCoin&& <CoinChart coin={id}/> }
    
</div>
}</div>)
}

export default CoinPage
