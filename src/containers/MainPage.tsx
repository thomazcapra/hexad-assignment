import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppCard, Footer, Header } from '../components';
import {
  GlobalActionTypes,
  GlobalContext,
  GlobalContextAction,
  IGame
} from '../context';
import { GameService } from '../service';

export default class MainPage extends React.Component<
  {},
  { onDestroy: Subject<void> }
> {
  static contextType = GlobalContext;
  context!: React.ContextType<typeof GlobalContext>;

  state = {
    onDestroy: new Subject<void>()
  };

  public componentDidMount(): void {
    const [, dispatch] = this.context;

    GameService.gameList$
      .pipe(takeUntil(this.state.onDestroy))
      .subscribe((games: IGame[]): void => {
        dispatch(
          new GlobalContextAction<GlobalActionTypes, IGame[]>(
            GlobalActionTypes.SET_GAMES,
            games
          )
        );
      });
  }

  public componentWillUnmount(): void {
    this.state.onDestroy.next();
  }

  private sortGamesByRating(games: IGame[]): IGame[] {
    if (!games?.length) {
      return [];
    }

    return games.sort(
      ({ rating: firstRating }: IGame, { rating: secondRating }: IGame) =>
        secondRating - firstRating
    );
  }

  render(): React.ReactNode {
    const [{ ids, gamesDictionary }] = this.context;

    const sortedGames = this.sortGamesByRating(
      ids.map((id: string) => gamesDictionary[id])
    );

    return (
      <Container maxWidth='xl'>
        <Header />
        <Box
          data-testid='page-body'
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {sortedGames.map((game: IGame) => (
            <AppCard {...game} key={game.id} />
          ))}
        </Box>
        <Footer />
      </Container>
    );
  }
}
