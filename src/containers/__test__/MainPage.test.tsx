import { Container } from '@material-ui/core';
import React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { AppCard, Footer, Header } from '../../components';
import { buildComponentWithContext } from '../../test-util';
import { default as MainPage } from '../MainPage';

describe('<MainPage /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;
  let mainPage: MainPage;

  beforeEach((): void => {
    componentInstance = buildComponentWithContext(<MainPage />);
    mainPage = componentInstance.root.findByType(MainPage).instance;
  });

  it('Should create a <MainPage /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
    expect(mainPage).toBeDefined();
  });

  it('Should kill all subscriptions on destroy', (): void => {
    const spyOnDestroy = jest.spyOn(mainPage.state.onDestroy$, 'next');

    expect(spyOnDestroy).not.toHaveBeenCalled();

    componentInstance.unmount();

    expect(spyOnDestroy).toHaveBeenCalledTimes(1);
  });

  it('Should have <Container /> in the MainPage', (): void => {
    const container = componentInstance.root.findByType(Container);
    expect(container).toBeDefined();
    expect(container.props.maxWidth).toEqual('xl');
  });

  it('Should have <Header /> in the MainPage', (): void => {
    const header = componentInstance.root.findByType(Header);
    expect(header).toBeDefined();
  });

  it('Should have <Footer /> in the MainPage', (): void => {
    const footer = componentInstance.root.findByType(Footer);
    expect(footer).toBeDefined();
  });

  it('Should have <Box /> in the MainPage', (): void => {
    const box = componentInstance.root.findByProps({
      'data-testid': 'page-body'
    });
    expect(box).toBeDefined();
    expect(box.props.style).toEqual(
      expect.objectContaining({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      })
    );
  });

  it('Should have <AppCard /> list in the MainPage', (): void => {
    const cards = componentInstance.root.findAllByType(AppCard);
    expect(cards).toBeDefined();
    expect(cards.length).toBeGreaterThan(1);
  });
});
