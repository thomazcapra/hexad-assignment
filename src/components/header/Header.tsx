import { Box, Typography } from '@material-ui/core';
import { default as SportsEsportsIcon } from '@material-ui/icons/SportsEsports';
import React from 'react';

const Header = () => {
  return (
    <Box
      style={{
        padding: '1rem',
        display: 'flex'
      }}
    >
      <React.Fragment>
        <SportsEsportsIcon
          style={{
            fontSize: '2rem',
            marginRight: '1rem'
          }}
        />
        <Typography variant='h4' component='h4'>
          Rating Games Assignment ;)
        </Typography>
      </React.Fragment>
    </Box>
  );
};

export default Header;
