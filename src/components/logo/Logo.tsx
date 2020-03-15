import { Box } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/images/hexad-small-logo.png';

const Logo = (): JSX.Element => {
  return (
    <Box
      style={{
        marginBottom: '1rem'
      }}
    >
      <img
        data-testid='logo-img'
        className='app-logo'
        alt='logo'
        style={{
          height: '3rem',
          width: '3rem'
        }}
        src={logo}
      />
    </Box>
  );
};

export default Logo;
