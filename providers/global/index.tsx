import React, { FC, ReactNode, useReducer, useContext } from 'react';
import { globalReducer } from './reducer';
import { toggleHeaderVisibilityAction } from './actions';
import { GlobalStateContext } from 'contexts';
import { GlobalActionsContext, defaultGlobalStateContext } from './contexts';

interface IProps {
  children?: ReactNode;
}

const GlobalProvider: FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, defaultGlobalStateContext);

  const toggleHeaderVisibility = (value: boolean) => dispatch(toggleHeaderVisibilityAction(value));

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalActionsContext.Provider value={{ toggleHeaderVisibility }}>{children}</GlobalActionsContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error('useGlobalState must be used within a CountProvider');
  }
  return context;
};

const useGlobalActions = () => {
  const context = useContext(GlobalActionsContext);

  if (context === undefined) {
    throw new Error('useGlobalActions must be used within a CountProvider');
  }

  return context;
};

const useGlobal = () => {
  return { ...useGlobalState(), ...useGlobalActions() };
};

export { GlobalProvider, useGlobalState, useGlobalActions, useGlobal };
