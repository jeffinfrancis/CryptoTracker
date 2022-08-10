import { Snackbar } from '@mui/material'
import { CryptoState } from '../CryptoContext'
import MuiAlert from '@mui/material/Alert';

const Alerts = () => {

   const {alert,setAlert}=CryptoState()

    const handleClose=()=>{
        setAlert({...alert,open:false})
    }
  return (
    <>
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert variant='filled' onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>{alert.message}</MuiAlert>
    </Snackbar>
   
    </>
  )
}

export default Alerts
