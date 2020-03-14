import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { default as Logo } from '../Logo';

describe('<Logo /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<Logo />);
  });

  it('Should create a <Logo /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});
