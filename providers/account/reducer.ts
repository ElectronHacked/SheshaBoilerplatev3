import { AccountActions } from './actions';
import { IAccountStateContext } from './contexts';

export function accountReducer(
  state: IAccountStateContext,
  { type, payload }: ReduxActions.Action<IAccountStateContext>
): IAccountStateContext {
  switch (type) {
    case AccountActions.LoginUser:
    case AccountActions.LoginUserSuccess:
    case AccountActions.LoginUserError:
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
