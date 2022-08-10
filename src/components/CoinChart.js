import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Line } from 'react-chartjs-2'
import { HistoricalChart } from '../config/api'
import { CryptoState } from '../CryptoContext'
import Chart from 'chart.js/auto';

export default function CoinChart(props) {

   const {coin}=props

   const chartContainer=
     {
      display:'flex',
      flexDirection:'column',
      padding:5,
      height: '60vh',
      width: '60vw'
    }
   
   
   const [historicalData, setHistoricalData] = useState([])
   const [days, setDays] = useState(2)

   const {currency,symbol}=CryptoState()
   
   const fectchHistoryData=async()=>{

   const {data}= await axios.get(HistoricalChart("solana",365,currency))
    
     data&&setHistoricalData(data.prices)

   }

   useEffect(()=>{
    
     fectchHistoryData()
   
},[])

   console.log("hisdata",historicalData);
   


  


  return (
    <div>{!historicalData?(
      <CircularProgress style={{color:"gold"}} size={250} thickness={1}/>
    ):<> 
    {
     <Line style={chartContainer} data={{
  
      labels:historicalData?.map((coin)=>{
        let date=new Date(coin[0])
        let time=date.getHours()>12?
                `${date.getHours()-12}:${date.getMinutes()} PM`:
                `${date.getHours()}:${date.getMinutes()} AM`
     
                return days===1?time:date.toLocaleDateString();
      }),
      datasets:[
        {
        data:historicalData?.map((coin)=>coin[1]),
        label:`price past ${days} Days in ${currency}`,
        backgroundColor:'gold'
        }
      ]
      }}
      options={{
        elements:{
          point:{
            radius:1
          }
        },

      }}
      />
       }
    </>}
     
    </div>
  )
}
