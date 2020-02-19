import React, { FC, ReactNode, useReducer } from 'react';
import { routeReducer } from './reducer';
import { RouteStateContext, RouteActionsContext } from 'providers/route/routeStateContext';
import { goingToRouteAction } from './actions';

interface IProps {
  children?: ReactNode;
}

const RouteProvider: FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(routeReducer, {});

  const goingToRoute = (route: string) => dispatch(goingToRouteAction(route));

  return (
    <RouteStateContext.Provider value={state}>
      <RouteActionsContext.Provider value={{ goingToRoute }}>{children}</RouteActionsContext.Provider>
    </RouteStateContext.Provider>
  );
};

function useRouteState() {
  const context = React.useContext(RouteStateContext);
  if (context === undefined) {
    throw new Error('useRouteState must be used within a CountProvider');
  }
  return context;
}
function useRouteActions() {
  const context = React.useContext(RouteActionsContext);
  if (context === undefined) {
    throw new Error('useRouteActions must be used within a CountProvider');
  }
  return context;
}

export { RouteProvider, useRouteState, useRouteActions };
