import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { AppCard } from '../Card';
import { buildComponentWithContext } from '../../../test-util';

describe('<AppCard /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = buildComponentWithContext(
      <AppCard name='name' rating={2} image='image' id='001' />
    );
  });

  it('Should create a <AppCard /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });
});
