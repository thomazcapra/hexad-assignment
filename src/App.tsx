import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { MainPage } from './containers';
import { GlobalContextProvider } from './context/GlobalContext';

class App extends React.Component {
  render(): JSX.Element {
    const theme = createMuiTheme({
      typography: {
        fontFamily: 'Dosis'
      }
    });

    return (
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainPage data-testid='main-page' />
        </ThemeProvider>
      </GlobalContextProvider>
    );
  }
}

export default App;
