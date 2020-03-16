import React, { FC, useReducer, useContext, PropsWithChildren } from 'react';
import { globalReducer } from './reducer';
import { toggleHeaderVisibilityAction } from './actions';
import { GlobalActionsContext, defaultGlobalStateContext, GlobalStateContext } from './contexts';
import { getFlagSetters } from 'providers/flagsSetters';

const GlobalProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, defaultGlobalStateContext);

  const toggleHeaderVisibility = (value: boolean) => dispatch(toggleHeaderVisibilityAction(value));

  const flagSetters = getFlagSetters(dispatch);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalActionsContext.Provider value={{ toggleHeaderVisibility, ...flagSetters }}>
        {children}
      </GlobalActionsContext.Provider>
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
