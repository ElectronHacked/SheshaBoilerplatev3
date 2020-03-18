import React, { FC, useReducer, useContext, PropsWithChildren } from 'react';
import { routeReducer } from './reducer';
import { RouteStateContext, RouteActionsContext } from 'providers/route/contexts';
import { goingToRouteAction } from './actions';
import { getFlagSetters } from '../utils/flagsSetters';

const RouteProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(routeReducer, {});

  const goingToRoute = (route: string) => dispatch(goingToRouteAction(route));

  return (
    <RouteStateContext.Provider value={state}>
      <RouteActionsContext.Provider value={{ ...getFlagSetters(dispatch), goingToRoute }}>
        {children}
      </RouteActionsContext.Provider>
    </RouteStateContext.Provider>
  );
};

function useRouteState() {
  const context = useContext(RouteStateContext);

  if (context === undefined) {
    throw new Error('useRouteState must be used within a RouteProvider');
  }
  return context;
}

function useRouteActions() {
  const context = useContext(RouteActionsContext);

  if (context === undefined) {
    throw new Error('useRouteActions must be used within a RouteProvider');
  }

  return context;
}

function useRoute() {
  return { ...useRouteState(), ...useRouteActions() };
}

export { RouteProvider, useRouteState, useRouteActions, useRoute };
