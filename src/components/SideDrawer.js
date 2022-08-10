import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Avatar,Button } from '@mui/material';
import RegisterOrLogin from './RegisterOrLogin';
import { CryptoState } from '../CryptoContext';


export default function SideDrawer() {

  const{setOpen}=CryptoState()
  const handleOpen = () => setOpen(true);
  const [state, setState] = React.useState({
    
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,padding:5 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <Button variant='outlined' onClick={handleOpen} >Open Log In</Button>
      <RegisterOrLogin/>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar alt="J" src="/static/images/avatar/1.jpg" sx={{cursor:"pointer"}} onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
