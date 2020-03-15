import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { buildComponentWithContext } from '../../test-util';
import { default as MainPage } from '../MainPage';

describe('<MainPage /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = buildComponentWithContext(<MainPage />);
  });

  it('Should create a <MainPage /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});
