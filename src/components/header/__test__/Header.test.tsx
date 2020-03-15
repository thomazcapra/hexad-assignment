import { Box, Typography } from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
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

  it('Should have a <Box /> in the Header component', (): void => {
    const box = componentInstance.root.findByType(Box);
    expect(box).toBeDefined();
    expect(box.props.style).toEqual(
      expect.objectContaining({
        padding: '1rem',
        display: 'flex'
      })
    );
  });

  it('Should have a <SportsEsportsIcon /> in the Header component', (): void => {
    const icon = componentInstance.root.findByType(SportsEsportsIcon);
    expect(icon).toBeDefined();
    expect(icon.props).toEqual(
      expect.objectContaining({
        style: { fontSize: '2rem', marginRight: '1rem' }
      })
    );
  });

  it('Should have a <Typography /> in the Header component', (): void => {
    const text = componentInstance.root.findByType(Typography);
    expect(text).toBeDefined();
    expect(text.props).toEqual(
      expect.objectContaining({
        children: 'Rating Games Assignment ;)',
        component: 'h4',
        variant: 'h4'
      })
    );
  });
});
