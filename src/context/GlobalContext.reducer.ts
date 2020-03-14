import {
  GlobalActionTypes,
  GlobalContextAction,
  GlobalPayloadType,
  IGame,
  IGlobalContext,
  RatePayload
} from './GlobalContext.models';

export const reducer = (
  state: IGlobalContext,
  action: GlobalContextAction<GlobalActionTypes, GlobalPayloadType>
): IGlobalContext => {
  switch (action.type) {
    case GlobalActionTypes.SET_GAMES: {
      const games = action.payload as IGame[];

      return {
        ...state,
        ids: games.map((game: IGame): string => game.id),
        gamesDictionary: games.reduce((previous, current: IGame) => {
          return {
            ...previous,
            [current.id]: current
          };
        }, {})
      };
    }

    case GlobalActionTypes.RATE_GAME: {
      const { id, rating } = action.payload as RatePayload;

      return {
        ...state,
        gamesDictionary: {
          ...state.gamesDictionary,
          [id]: {
            ...state.gamesDictionary[id],
            rating
          }
        }
      };
    }
  }

  return state;
};
