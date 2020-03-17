import React, { FC, useReducer, useContext, PropsWithChildren } from 'react';
import { uiReducer } from './reducer';

import { setControlsSizeAction } from './actions';
import { ControlSize, UiActionsContext, UiStateContext, UI_CONTEXT_INITIAL_STATE } from './contexts';
import { getFlagSetters } from '../utils/flagsSetters';

const UiProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_CONTEXT_INITIAL_STATE);

  const setControlsSize = (size: ControlSize) => {
    dispatch(setControlsSizeAction(size));
  };

  return (
    <UiStateContext.Provider value={state}>
      <UiActionsContext.Provider value={{ ...getFlagSetters(dispatch), setControlsSize }}>
        {children}
      </UiActionsContext.Provider>
    </UiStateContext.Provider>
  );
};

function useUiState() {
  const context = useContext(UiStateContext);

  if (context === undefined) {
    throw new Error('useUiState must be used within a CountProvider');
  }
  return context;
}

function useUiActions() {
  const context = useContext(UiActionsContext);

  if (context === undefined) {
    throw new Error('useUiActions must be used within a CountProvider');
  }

  return context;
}

function useUi() {
  return { ...useUiState(), ...useUiActions() };
}

export { UiProvider, useUiState, useUiActions, useUi };
