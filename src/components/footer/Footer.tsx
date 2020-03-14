import React from 'react';
import { Box, Typography } from '@material-ui/core';
import footerImage from '../../assets/images/footer.jpg';
import { Logo } from '../logo';

const Footer = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${footerImage})`,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '1rem',
        padding: '5rem 0'
      }}
    >
      <Logo />
      <Typography>Porschestraße 58, 38440,</Typography>
      <Typography>Wolfsburg, Germany</Typography>
    </Box>
  );
};

export default Footer;
