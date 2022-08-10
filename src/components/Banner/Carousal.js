import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContext'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom';

const Carousal = () => {
    const[trending,setTrending]=useState([])
    const {currency,symbol}=CryptoState()

    const fetchTrendingCoins=async ()=>{
       const {data}= await axios.get(TrendingCoins(currency))
       setTrending(data)
    }
    useEffect(()=>{
        fetchTrendingCoins()
       
    },[currency])
 
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

    const items=trending.map((coin,key)=>{
      let profit=coin?.market_cap_change_percentage_24h>=0
        return( <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          cursor:"pointer",
          textTransform:"uppercase"
        }}>
          <Link to={`/coins/${coin.id}`}>
          <img
          src={coin?.image}
          height="80"
          alt={coin?.name}
          style={{marginBottom:10}}
          ></img></Link>
        <span> {coin?.symbol}&nbsp;
        <span style={{color:profit? 'green':'red'}}>{profit&&"+"}{coin?.market_cap_change_percentage_24h.toFixed(2)}%</span></span>
<span>{symbol}&nbsp;{numberWithCommas(coin?.current_price)}</span>
        </div>)
       
          
        
    })

  return (
    <div style={{
        height:"50%",
        display:"flex",
        alignItems:"center"
    }}>
       
        
     <AliceCarousel
      mouseTracking 
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableButtonsControls
      disableDotsControls
      disableSlideInfo
      autoPlay
      responsive={{1024: {
        items: 5
    }}}
      items={items} /> 
    </div>
  )
}

export default Carousal