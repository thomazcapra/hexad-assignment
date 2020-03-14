import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { default as Header } from '../Header';

describe('<Header /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<Header />);
  });

  it('Should create a <Header /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});
