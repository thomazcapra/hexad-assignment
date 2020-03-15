import { default as GameService } from '../GameService';
import { act } from 'react-test-renderer';

describe('GameService', (): void => {
  it('Should have initial state', async (): Promise<void> => {
    const initialList = await GameService.gameList$.value;
    expect(initialList).toBeDefined();
    expect(initialList).toHaveLength(14);
  });

  it('Should dispatch a new game list when shuffle is called ', async (): Promise<
    void
  > => {
    const spyOnNext = jest.spyOn(GameService.gameList$, 'next');

    expect(spyOnNext).not.toHaveBeenCalled();

    await act(
      async (): Promise<void> => {
        await GameService.shuffle();
      }
    );

    expect(spyOnNext).toHaveBeenCalled();
  });
});
