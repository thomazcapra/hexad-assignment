import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import React from 'react';
import { default as TestRenderer, act } from 'react-test-renderer';
import { buildComponentWithContext } from '../../../test-util';
import { AppCard } from '../Card';
import Rating from '@material-ui/lab/Rating';

describe('<AppCard /> component', (): void => {
  let componentInstance: TestRenderer.ReactTestRenderer;
  let appCardInstance: TestRenderer.ReactTestInstance;

  const nameMock = 'name',
    imageMock = 'image',
    idMock = '0001',
    ratingMock = 2;

  beforeEach((): void => {
    componentInstance = buildComponentWithContext(
      <AppCard
        name={nameMock}
        rating={ratingMock}
        image={imageMock}
        id={idMock}
      />
    );

    appCardInstance = componentInstance.root.findByType(AppCard);
  });

  it('Should create a <AppCard /> component instance', (): void => {
    expect(componentInstance).toBeDefined();
    expect(appCardInstance).toBeDefined();
  });

  it('Should have a <Card /> in the AppCard component', (): void => {
    const card = appCardInstance.findByType(Card);
    expect(card).toBeDefined();
    expect(card.props.children).toHaveLength(3);
  });

  it('Should have a <CardHeader /> in the AppCard component', (): void => {
    const cardHeader = appCardInstance.findByType(CardHeader);
    expect(cardHeader).toBeDefined();
    expect(cardHeader.props.title).toEqual(nameMock);
    expect(cardHeader.props.style).toEqual(
      expect.objectContaining({
        height: '6rem'
      })
    );
  });

  it('Should have a <CardMedia /> in the AppCard component', (): void => {
    const cardMedia = appCardInstance.findByType(CardMedia);
    expect(cardMedia).toBeDefined();
    expect(cardMedia.props.title).toEqual(nameMock);
    expect(cardMedia.props.image).toEqual(imageMock);
  });

  it('Should have a <CardContent /> in the AppCard component', (): void => {
    const cardContent = appCardInstance.findByType(CardContent);
    expect(cardContent).toBeDefined();
  });

  it('Should have a <Rating /> in the AppCard component', async (): Promise<
    void
  > => {
    const rating = appCardInstance.findByType(Rating);
    expect(rating).toBeDefined();
    expect(rating.props.name).toEqual(imageMock);
    expect(rating.props.size).toEqual('large');
    expect(rating.props.value).toEqual(ratingMock);
    expect(rating.props.onChange).toBeDefined();

    act((): void => {
      expect(() => rating.props.onChange({}, 3)).not.toThrowError();
    });

    expect(componentInstance.root.findByType(Rating).props.value).toEqual(
      ratingMock
    );
  });
});
