import { BehaviorSubject } from 'rxjs';
import { IGame } from '../context';
import initialGameList from '../mock_data/game_list.json';

interface IGameService {
  /**
   * The game list behaviourSubject.
   */
  gameList$: BehaviorSubject<IGame[]>;

  /**
   * Shuffles the games list changing the rating randonly.
   */
  shuffle(): Promise<void>;
}

class GameService implements IGameService {
  public gameList$: BehaviorSubject<IGame[]> = new BehaviorSubject<IGame[]>(
    initialGameList
  );

  private static _instance = new GameService();

  private constructor() {}

  public static getInstance(): IGameService {
    return this._instance;
  }

  /**
   * @inheritdoc
   */
  async shuffle(): Promise<void> {
    const gameList = await this.gameList$.value;
    gameList.forEach((game: IGame) => {
      game.rating = this.randomInt(1, 5);
    });

    this.gameList$.next(gameList);
  }

  /**
   * Generate a random int between {min} and {max}.
   * @param min lower limit.
   * @param max  higher limit.
   */
  private randomInt(min: number, max: number) {
    return min + Math.floor((max + 1 - min) * Math.random());
  }
}

export default GameService.getInstance();
