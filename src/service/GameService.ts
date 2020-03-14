import { IGame } from '../context';
import { BehaviorSubject, Subject } from 'rxjs';
import initialState from '../mock_data/game_list.json';

interface IGameService {
  buttonActive$: Subject<boolean>;
  gameList$: BehaviorSubject<IGame[]>;

  shuffle(): void;
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
  shuffle(): void {}
}

export default GameService.getInstance();
