import React from 'react';
import { default as TestRenderer, act } from 'react-test-renderer';
import { default as App } from './App';
import * as Icons from '@material-ui/icons';

describe('<App />', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<App />);
  });

  it('Should create a <App /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });

  it('Should call startRandomShuffle method when the Icons.Shuffle is clicked', (): void => {
    const shuffleIcon = componentInstance.root.findByType(Icons.Shuffle);
    const spyOnShuffle = jest.spyOn(
      componentInstance.root.instance,
      'startRandomShuffle'
    );

    expect(spyOnShuffle).not.toHaveBeenCalled();

    act((): void => {
      shuffleIcon.props.onClick();
    });

    expect(spyOnShuffle).toHaveBeenCalledTimes(1);
  });

  it('Should call stopShuffle method when the Icons.Stop is clicked', (): void => {
    const shuffleIcon = componentInstance.root.findByType(Icons.Shuffle);
    const spyOnStop = jest.spyOn(
      componentInstance.root.instance,
      'stopShuffle'
    );

    expect(spyOnStop).not.toHaveBeenCalled();

    act((): void => {
      shuffleIcon.props.onClick();
    });

    const stopIcon = componentInstance.root.findByType(Icons.Stop);

    act((): void => {
      stopIcon.props.onClick();
    });

    expect(spyOnStop).toHaveBeenCalledTimes(1);
  });
});
