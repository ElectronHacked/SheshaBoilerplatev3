import { GlobalActionEnums } from './actions';
import { IGlobalStateContext } from 'providers/global/contexts';
import flagsReducer from '../utils/flagsReducer';

export function globalReducer(
  incomingState: IGlobalStateContext,
  action: ReduxActions.Action<IGlobalStateContext>
): IGlobalStateContext {
  //#region Register flags reducer
  const state = flagsReducer(incomingState, action);

  const { type, payload } = action;
  //#endregion

  switch (type) {
    case GlobalActionEnums.ToggleHeaderVisibility:
      /* NEW_ACTION_ENUM_GOES_HERE */
      return {
        ...state,
        ...payload,
      };

    default: {
      return state;
      // throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
