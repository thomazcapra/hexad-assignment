import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Fab
} from '@material-ui/core';
import React from 'react';
import { MainPage } from './containers';
import { GlobalContextProvider } from './context';
import * as Icons from '@material-ui/icons';
import { GameService } from './service';
import { Subject, interval } from 'rxjs';
import { delayWhen, takeUntil } from 'rxjs/operators';

interface AppState {
  suffleSubject$: Subject<void>;
  shuffleActivated: boolean;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    suffleSubject$: new Subject<void>(),
    shuffleActivated: false
  };

  startRandomShuffle(): void {
    this.setState({ shuffleActivated: true }, () => {
      interval(1000)
        .pipe(
          delayWhen(() => interval(Math.random() * 5000)),
          takeUntil(this.state.suffleSubject$)
        )
        .subscribe(() => {
          GameService.shuffle();
        });
    });
  }

  stopShuffle(): void {
    this.setState({ shuffleActivated: false }, () =>
      this.state.suffleSubject$.next()
    );
  }

  render(): JSX.Element {
    const theme = createMuiTheme({
      typography: {
        fontFamily: 'Dosis'
      }
    });

    const CurrentIcon = this.state.shuffleActivated ? (
      <Icons.Stop onClick={() => this.stopShuffle()} />
    ) : (
      <Icons.Shuffle onClick={() => this.startRandomShuffle()} />
    );

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
            {CurrentIcon}
          </Fab>
        </ThemeProvider>
      </GlobalContextProvider>
    );
  }
}

export default App;
