import * as React from 'react';
import { PropTypes } from 'prop-types';
import {Tabs,Tab,LinearProgress,Backdrop,Box,Modal,Fade,Typography} from '@mui/material'
import Login from './Login';
import Register from './Register';
import { CryptoState } from '../CryptoContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:500,
  bgcolor: 'gold',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RegisterOrLogin() {
  
 
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const handleRegstr=(val)=>{
  setValue(val)
}

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
  }

  const {open,setOpen}=CryptoState()
  return (
    <div >
      
      <LinearProgress color='primary'/>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Box sx={style}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}  onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{width:'50%',color:'whitesmoke'}} label="Sign In" {...a11yProps(0)} />
          <Tab sx={{width:'50%',color:'whitesmoke'}} label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      </Box>
      
      {/* {value===0&&<Login/>}
      {value===1&&<Register/>} */}
      <TabPanel value={value} index={0}>
        <Login onRegr={handleRegstr}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register onRegr={handleRegstr}/>
      </TabPanel>
    </Box>
        </Fade>
      </Modal>
    </div>
  );
}
