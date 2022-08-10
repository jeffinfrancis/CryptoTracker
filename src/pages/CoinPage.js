import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api';
import {Typography} from '@mui/material'
import CoinChart from '../components/CoinChart';

const CoinPage = () => {
    const {id}=useParams()
    
    const [singleCoin,setSingleCoin]=useState({})

    const fetchSingleCoin=async()=>{
       const {data}=await axios.get(SingleCoin(id))
       setSingleCoin(data)
       
    }

    useEffect(()=>{
        fetchSingleCoin();
        singleCoin&& console.log(singleCoin);
    },[])

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
    <div style={styles.container}>
  <div style={styles.sidebar}>
  <img
        src={singleCoin?.image?.large}
        height="200" alt='coin'
    style={{marginBottom:20}}
        />
         <Typography gutterBottom variant="h5" component="div">
          {singleCoin.id}
        </Typography>
        <Typography variant="body2" color="white">
         {singleCoin?.description?.bg.split('.')[0]}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Rank : {singleCoin?.market_cap_rank}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Current Price : {singleCoin?.market_data?.current_price?.cad}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Market Cap : {singleCoin?.id}
        </Typography>
  </div>
 
        
     
     
    
    
       {singleCoin&& <CoinChart coin={singleCoin}/> }
    
</div>
  )
}

export default CoinPage
