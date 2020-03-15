import { BehaviorSubject, Subject } from 'rxjs';
import { IGame } from '../context';
import initialState from '../mock_data/game_list.json';

interface IGameService {
  buttonActive$: Subject<boolean>;
  gameList$: BehaviorSubject<IGame[]>;

  shuffle(): Promise<void>;
}

class GameService implements IGameService {
  public buttonActive$ = new Subject<boolean>();
  public gameList$: BehaviorSubject<IGame[]> = new BehaviorSubject<IGame[]>(
    initialState
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

  private randomInt(min: number, max: number) {
    return min + Math.floor((max + 1 - min) * Math.random());
  }
}

export default GameService.getInstance();
