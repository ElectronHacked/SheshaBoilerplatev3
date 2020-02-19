import { IRouteStateContext } from 'providers/route/routeStateContext';
import { RouteActionEnums } from './actions';

export function routeReducer (
  state: IRouteStateContext,
  { type, payload }: ReduxActions.Action<IRouteStateContext>
): IRouteStateContext {
  switch (type) {
    case RouteActionEnums.GoingToRoute:
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
