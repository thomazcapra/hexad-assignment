import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import {
  GlobalActionTypes,
  GlobalContextAction,
  IGame,
  useGlobalContext
} from '../../context';
import { RatePayload } from './../../context';

const useStyles = makeStyles(theme => ({
  root: {
    width: '18rem',
    margin: '0.5rem',
    fontFamily: 'Montserrat'
  },
  media: {
    height: '25rem',
    margin: '0 -7% 0 -7%'
  },
  rating: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export const AppCard = (props: IGame): JSX.Element => {
  const { name, rating, image, id } = props;
  const [, dispatch] = useGlobalContext();

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        style={{
          height: '6rem'
        }}
        title={name}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Rating
          name={image}
          size='large'
          value={rating}
          className={classes.rating}
          onChange={(event, newValue) => {
            dispatch(
              new GlobalContextAction<GlobalActionTypes, RatePayload>(
                GlobalActionTypes.RATE_GAME,
                { id, rating: newValue ?? rating }
              )
            );
          }}
        />
      </CardContent>
    </Card>
  );
};
