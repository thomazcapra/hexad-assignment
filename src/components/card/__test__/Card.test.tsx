import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { AppCard } from '../Card';

describe('<AppCard /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(
      <AppCard name='name' rating={2} image='image' />
    );
  });

  it('Should create a <AppCard /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});
