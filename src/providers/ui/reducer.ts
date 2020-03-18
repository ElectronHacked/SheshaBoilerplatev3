import { IUiStateContext } from './contexts';
import { UiActionsEnums } from './actions';
import flagsReducer from 'providers/utils/flagsReducer';

export function uiReducer(
  incomingState: IUiStateContext,
  action: ReduxActions.Action<IUiStateContext>
): IUiStateContext {
  //#region Register flags reducer
  const state = flagsReducer(incomingState, action);

  const { type, payload } = action;
  //#endregion

  switch (type) {
    case UiActionsEnums.SetControlsSize:
      /* NEW_ACTION_ENUM_GOES_HERE */
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
