import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { default as Footer } from '../Footer';

describe('<Footer /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<Footer />);
  });

  it('Should create a <Footer /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});
