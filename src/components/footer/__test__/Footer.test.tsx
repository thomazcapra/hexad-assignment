import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { default as Footer } from '../Footer';
import { Box, Typography } from '@material-ui/core';
import { Logo } from '../../logo';

describe('<Footer /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;

  beforeEach((): void => {
    componentInstance = TestRenderer.create(<Footer />);
  });

  it('Should create a <Footer /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
  });

  it('Should have a <Box /> in the Footer component', (): void => {
    const box = componentInstance.root.findByType(Box);
    expect(box).toBeDefined();
    expect(box.props.style).toEqual(
      expect.objectContaining({
        backgroundImage: `url(footer.jpg)`,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '1rem',
        padding: '5rem 0'
      })
    );
  });

  it('Should have a <Logo /> in the Footer component', (): void => {
    const logo = componentInstance.root.findByType(Logo);
    expect(logo).toBeDefined();
  });

  it('Should have two <Typography /> with the company address in the Footer component', (): void => {
    const [first, second] = componentInstance.root.findAllByType(Typography);
    expect(first.props.children).toContain('Porschestraße 58, 38440,');
    expect(second.props.children).toContain('Wolfsburg, Germany');
  });
});
