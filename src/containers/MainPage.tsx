import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppCard, Footer, Header } from '../components';
import { GameService, IGame } from '../service';

export default class MainPage extends React.Component<
  {},
  { games: IGame[]; onDestroy: Subject<void> }
> {
  state = {
    games: [],
    onDestroy: new Subject<void>()
  };

  public componentDidMount(): void {
    GameService.gameList$
      .pipe(takeUntil(this.state.onDestroy))
      .subscribe((games: IGame[]): void => {
        this.setState(state => {
          return {
            ...state,
            games
          };
        });
      });
  }

  public componentWillUnmount(): void {
    this.state.onDestroy.next();
  }

  render(): React.ReactNode {
    return (
      <Container maxWidth='xl'>
        <Header />
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {this.state.games.map((game: IGame, index: number) => (
            <AppCard {...game} key={index} />
          ))}
        </Box>
        <Footer />
      </Container>
    );
  }
}
