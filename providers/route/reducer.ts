import { IRouteStateContext } from 'providers/route/contexts';
import { RouteActionEnums } from './actions';
import flagsReducer from 'providers/utils/flagsReducer';

export function routeReducer(
  incomingState: IRouteStateContext,
  action: ReduxActions.Action<IRouteStateContext>
): IRouteStateContext {
  //#region Register flags reducer
  const state = flagsReducer(incomingState, action);

  const { type, payload } = action;
  //#endregion

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
