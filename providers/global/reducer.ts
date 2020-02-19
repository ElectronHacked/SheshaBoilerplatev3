import { GlobalActionEnums } from './actions';
import { IGlobalStateContext } from 'contexts/globalContext';

export function globalReducer(
  state: IGlobalStateContext,
  { type, payload }: ReduxActions.Action<IGlobalStateContext>
): IGlobalStateContext {
  switch (type) {
    case GlobalActionEnums.ToggleHeaderVisibility:
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
