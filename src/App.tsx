import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Fab
} from '@material-ui/core';
import React from 'react';
import { MainPage } from './containers';
import { GlobalContextProvider } from './context/GlobalContext';
import * as Icons from '@material-ui/icons';
import { GameService } from './service';

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
          <Fab
            color='primary'
            aria-label='add'
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem'
            }}
          >
            <Icons.Shuffle onClick={() => GameService.shuffle()} />
          </Fab>
        </ThemeProvider>
      </GlobalContextProvider>
    );
  }
}

export default App;
