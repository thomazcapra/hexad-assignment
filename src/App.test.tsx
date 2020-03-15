import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { default as App } from './App';

describe('<App />', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<App />);
  });

  it('Should create a <App /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});