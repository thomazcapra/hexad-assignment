import React from 'react';

export class GlobalContextAction<ActionType, PayloadType> {
  public type: ActionType;
  public payload: PayloadType;
  constructor(type: ActionType, payload: PayloadType) {
    this.type = type;
    this.payload = payload;
  }
}

export interface IGame {
  id: string;
  name: string;
  image: string;
  rating: number;
}

export interface IGlobalContext {
  gamesDictionary: { [key: string]: IGame };
  ids: string[];
}

/**
 * Initial state;
 */
export const initialState: IGlobalContext = {
  gamesDictionary: {},
  ids: []
};

export interface RatePayload {
  id: string;
  rating: number;
}

export type GlobalPayloadType = IGame[] | RatePayload;

export enum GlobalActionTypes {
  SET_GAMES = 'SET_GAMES',
  RATE_GAME = 'RATE_GAME'
}

/**
 * Type of the useReducer;
 */
export type GlobalContextValue = [
  IGlobalContext,
  React.Dispatch<GlobalContextAction<GlobalActionTypes, GlobalPayloadType>>
];
