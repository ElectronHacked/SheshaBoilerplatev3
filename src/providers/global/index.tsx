import React, { FC, useReducer, useContext, PropsWithChildren } from 'react';
import { globalReducer } from './reducer';
import { toggleHeaderVisibilityAction, fetchPostsAction, fetchPostsSuccessAction, /* NEW_ACTION_IMPORT_GOES_HERE */ } from './actions';
import { GlobalActionsContext, defaultGlobalStateContext, GlobalStateContext } from './contexts';
import { getFlagSetters } from 'providers/utils/flagsSetters';

const GlobalProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, defaultGlobalStateContext);

  const toggleHeaderVisibility = (value: boolean) => dispatch(toggleHeaderVisibilityAction(value));

  const fetchPosts = () => dispatch(fetchPostsAction());
  const fetchPostsSuccess = () => dispatch(fetchPostsSuccessAction());

  /* NEW_ACTION_DECLARATION_GOES_HERE */

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalActionsContext.Provider
        value={{
          ...getFlagSetters(dispatch),
          toggleHeaderVisibility,
          fetchPosts,
          fetchPostsSuccess /* NEW_ACTION_GOES_HERE */,
        }}
      >
        {children}
      </GlobalActionsContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};

const useGlobalActions = () => {
  const context = useContext(GlobalActionsContext);

  if (context === undefined) {
    throw new Error('useGlobalActions must be used within a GlobalProvider');
  }

  return context;
};

const useGlobal = () => {
  return { ...useGlobalState(), ...useGlobalActions() };
};

export { GlobalProvider, useGlobalState, useGlobalActions, useGlobal };
