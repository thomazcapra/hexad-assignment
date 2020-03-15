import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { default as Logo } from '../Logo';
import { Box } from '@material-ui/core';

describe('<Logo /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<Logo />);
  });

  it('Should create a <Logo /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });

  it('Should have a <Box /> in the Logo component', (): void => {
    const box = componentInstance.root.findByType(Box);
    expect(box).toBeDefined();
    expect(box.props.style).toEqual(
      expect.objectContaining({
        marginBottom: '1rem'
      })
    );
  });

  it('Should have a <img /> in the Logo component', (): void => {
    const img = componentInstance.root.findByProps({
      'data-testid': 'logo-img'
    });
    expect(img).toBeDefined();
    expect(img.props.style).toEqual(
      expect.objectContaining({
        height: '3rem',
        width: '3rem'
      })
    );

    expect(img.props.className).toEqual('app-logo');
    expect(img.props.alt).toEqual('logo');
    expect(img.props.src).toEqual('hexad-small-logo.png');
  });
});
