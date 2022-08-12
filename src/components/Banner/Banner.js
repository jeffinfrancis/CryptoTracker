import { Container ,Typography} from '@mui/material'
import React from 'react'
import Carousal from './Carousal'


const Banner = () => {
  return (
    <div style={{
        backgroundImage:"url(./banner2.jpg)"
       
    }}>
      <Container sx={{
         minHeight:"400px",
         display:'flex',
         flexDirection:"column",
         paddingTop:25,
         justifyContent:"space-around",
      }}>
              <div style={{
                display:"flex",
                height:"40%",
                flexDirection:"column",
                justifyContent:"center",
                textAlign:"center"
              }}>
                <Typography variant="h2" sx={{
                  fontWeight:"bold",
                  
                  fontFamily:"Montserrat"
                }}>
                     Crypto Hunter
                     
                </Typography>
                <Typography variant='subtitle1' sx={{
                  color:"darkgrey",
                  textTransformation:"capitalize",
                  fontFamily:"Montserrat",marginBottom:15,
                }}>
                Get all the info regarding your favorite crypto currency
                </Typography>
              </div>
              <Carousal/>
      </Container>
    </div>
  )
}

export default Banner