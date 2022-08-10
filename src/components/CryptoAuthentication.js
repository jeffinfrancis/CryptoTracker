import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { CryptoState } from "../CryptoContext";
import React from 'react'



export const CryptoAuthentication=()=>{
  
  
  return <>
  </>
}


const CreateWithEmailAndPassword=(email,password)=>{
    
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        //setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}


const LoginWithEmailandPassword=(email,password)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    
    //setUser(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
}

export {
            CreateWithEmailAndPassword, 
            LoginWithEmailandPassword
          
       }