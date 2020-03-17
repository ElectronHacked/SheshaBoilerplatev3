import { GlobalActionEnums } from './actions';
import { IGlobalStateContext } from 'providers/global/contexts';
import flagsReducer from '../utils/flagsReducer';

export function globalReducer(
  incomingState: IGlobalStateContext,
  { type, payload }: ReduxActions.Action<IGlobalStateContext>
): IGlobalStateContext {
  const state = flagsReducer(incomingState, { type, payload });

  switch (type) {
    case GlobalActionEnums.ToggleHeaderVisibility:
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
