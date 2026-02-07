import React from 'react';
import { Container } from '@mui/material';
import button1 from '../assets/icon.png';
import button2 from '../assets/icon1.png';
import button3 from '../assets/icon2.png';
import button4 from '../assets/icon3.png';

function SideBar() {
  return (
    <div>
      <Container
        sx={{
          backgroundColor: '#020203',
          width: 'fit-content',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div>
          <img src={button1} alt="Button 1" />
        </div>
        <div>
          <img src={button2} alt="Button 2" />
        </div>
        <div>
          <img src={button3} alt="Button 3" />
        </div>
        <div>
          <img src={button4} alt="Button 4" />
        </div>
      </Container>
    </div>
  );
}

export default SideBar;
