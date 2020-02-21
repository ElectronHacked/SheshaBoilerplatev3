import { IRegistrationState } from './../../contexts/contexts';
import { RegistrationActions } from './action';

export function registraionReducer(
  state: IRegistrationState,
  action: ReduxActions.Action<IRegistrationState>
): IRegistrationState {
  const { payload, type } = action;

  switch (type) {
    case RegistrationActions.RegisterUser:
    case RegistrationActions.RegisterUserSuccess:
    case RegistrationActions.RegisterUserError:
      //#endregion
      return {
        ...state,
        ...payload,
      };
  }
}
