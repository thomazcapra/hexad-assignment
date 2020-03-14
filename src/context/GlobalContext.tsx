import React from 'react';
import { reducer } from './GlobalContext.reducer';
import {
  IGlobalContext,
  initialState,
  GlobalContextValue
} from './GlobalContext.models';

/**
 * Initial state to the useReducer.
 */

export const GlobalContext = React.createContext<GlobalContextValue>(
  {} as GlobalContextValue
);

/**
 * @param param0 children.
 */
export const GlobalContextProvider = ({
  children,
  initialContext = {}
}: {
  children: JSX.Element | JSX.Element[];
  initialContext?: Partial<IGlobalContext>;
}): JSX.Element => {
  const initialContextState = React.useReducer(reducer, {
    ...initialState,
    ...initialContext
  });
  return (
    <GlobalContext.Provider value={initialContextState}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextValue =>
  React.useContext<GlobalContextValue>(GlobalContext);
