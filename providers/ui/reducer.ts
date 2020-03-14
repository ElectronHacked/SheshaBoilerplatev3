import { IUiStateContext } from './contexts';
import { UiActionsEnums } from './actions';

export function uiReducer(
  state: IUiStateContext,
  { type, payload }: ReduxActions.Action<IUiStateContext>
): IUiStateContext {
  switch (type) {
    case UiActionsEnums.SetControlsSize:
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
