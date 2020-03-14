import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { MainPage } from './containers';

class App extends React.Component {
  render(): JSX.Element {
    const theme = createMuiTheme({
      typography: {
        fontFamily: 'Dosis'
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage data-testid='main-page' />
      </ThemeProvider>
    );
  }
}

export default App;
