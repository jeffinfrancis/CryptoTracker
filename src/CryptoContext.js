import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
const Crypto=React.createContext() 
const CryptoContext = ({children}) => {
    
    const[currency,setCurrency]=useState("INR")
    const[symbol,setSymbol]=useState("₹")
    const[user,setUser]=useState(null)
    useEffect(()=>{
       currency==="INR"? setSymbol("₹"):setSymbol("$")    
    },[currency])
   const [alert,setAlert]=useState({
      open:false,
      message:'',
      severity:'success'
    })
    const [open, setOpen] = React.useState(false);
  return (
    <Crypto.Provider value={{currency
    ,symbol
    ,setCurrency
    ,alert
    ,setAlert
    ,open
    ,setOpen
    ,user
    ,setUser
    }}>
        {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState=()=>{return useContext(Crypto)}

//Optional method
// export {
//   Crypto
// }