import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { default as MainPage } from '../MainPage';

describe('<MainPage /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<MainPage />);
  });

  it('Should create a <MainPage /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});
