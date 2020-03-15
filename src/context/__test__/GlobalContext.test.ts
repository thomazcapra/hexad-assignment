import { reducer } from '../GlobalContext.reducer';
import {
  IGlobalContext,
  IGame,
  GlobalActionTypes,
  GlobalPayloadType
} from '../GlobalContext.models';
import { GlobalContextAction } from './../GlobalContext.models';

describe('GlobalContext', (): void => {
  const payloadMock: IGame[] = [
    {
      id: '0001',
      name: 'name',
      image: 'image',
      rating: 0
    }
  ];

  it('Should set the list of games with the payload when SET_GAMES is triggered', (): void => {
    const initialState: IGlobalContext = {
      ids: [],
      gamesDictionary: {}
    };

    const newState = reducer(
      initialState,
      new GlobalContextAction<GlobalActionTypes, GlobalPayloadType>(
        GlobalActionTypes.SET_GAMES,
        payloadMock
      )
    );

    expect(newState.ids).toHaveLength(1);
    expect(newState.gamesDictionary[payloadMock[0].id]).toEqual(
      expect.objectContaining(payloadMock[0])
    );
  });

  it('Should change the rate of the game when RATE_GAME is triggered', (): void => {
    const initialState: IGlobalContext = {
      ids: payloadMock.map(g => g.id),
      gamesDictionary: {}
    };

    const newState = reducer(
      initialState,
      new GlobalContextAction<GlobalActionTypes, GlobalPayloadType>(
        GlobalActionTypes.SET_GAMES,
        payloadMock
      )
    );

    expect(newState.ids).toHaveLength(1);
    expect(newState.gamesDictionary[payloadMock[0].id]).toEqual(
      expect.objectContaining(payloadMock[0])
    );
  });
});
