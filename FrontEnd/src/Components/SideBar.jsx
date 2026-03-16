import React from 'react';
import { Box } from '@mui/material';
import button1 from '../assets/icon.png';
import button2 from '../assets/icon1.png';
import button3 from '../assets/icon2.png';
import button4 from '../assets/icon3.png';

function SideBar() {
  return (
    <Box
      sx={{
        backgroundColor: '#020203',
        width: '120px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <img src={button1} alt="Button 1" />
        <img src={button2} alt="Button 2" />
        <img src={button3} alt="Button 3" />
        <img src={button4} alt="Button 4" />
      </Box>

      <Box
        sx={{
          marginTop: '200px',
          color: 'white',
          fontSize: '12px',
          fontFamily: 'roboto',
          transform: 'rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}
      >
        Copyright, SportSee 2020
      </Box>
    </Box>
  );
}

export default SideBar;
