import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { GlobalContextProvider } from '../context';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Dosis'
  }
});

export const buildComponentWithContext = (component: JSX.Element) => {
  return TestRenderer.create(
    <ThemeProvider theme={theme}>
      <GlobalContextProvider>{component}</GlobalContextProvider>
    </ThemeProvider>
  );
};
