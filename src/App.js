import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import CoinPage from './pages/CoinPage'
import HomePage from './pages/HomePage'
import Alerts from './components/Alerts';


function App() {



  return (
    
      <Router> 
        <div style={{
          backgroundColor:"#14161a",
          color:"white",
          minHeight:"100vh"
        }}>
        <Header/>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/coins/:id" element={<CoinPage/>}/>
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegisterOrLogin/>}/> */}
        </Routes>
        <Alerts/>
        </div>
      </Router>
     
  );
}

export default App;
