import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'



const firebaseConfig={
    apiKey: "AIzaSyAij7_2INKYv2om-tlIJuisY4-KoeUTBTM",
    authDomain: "cryptohunter-2d84b.firebaseapp.com",
    projectId: "cryptohunter-2d84b",
    storageBucket: "cryptohunter-2d84b.appspot.com",
    messagingSenderId: "1003933864231",
    appId: "1:1003933864231:web:1ba683735dee68eb1e9902"
}


//Initialize firebaseapp

const app=initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}

