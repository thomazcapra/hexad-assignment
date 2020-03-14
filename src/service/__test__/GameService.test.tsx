import { default as GameService } from '../GameService';

describe('GameService', (): void => {
  it('Should have initial state', async (): Promise<void> => {
    const initialList = await GameService.gameList$.value;
    expect(initialList).toBeDefined();
    expect(initialList).toHaveLength(14);
  });
});
