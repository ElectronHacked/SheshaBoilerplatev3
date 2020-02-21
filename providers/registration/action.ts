import { IRegistrationState } from './../../contexts/contexts';
import { createAction } from 'redux-actions';

export enum RegistrationActions {
  RegisterUser = 'REGISTER',
  RegisterUserSuccess = 'REGISTER_USER_SUCCESS',
  RegisterUserError = 'REGISTER_USER_ERROR',
}

//#endregion Register User
export const registerUserAction = createAction<IRegistrationState>(RegistrationActions.RegisterUser, () => ({
  isRegistering: true,
  isRegisteringError: null,
}));

export const registerUserSuccessAction = createAction<IRegistrationState, any>(
  RegistrationActions.RegisterUserSuccess,
  registeredResponse => ({ isRegistering: false, registeredResponse })
);

export const registerUserErrorAction = createAction<IRegistrationState, string>(
  RegistrationActions.RegisterUserError,
  isRegisterError => ({ isRegistering: false, isRegisterError })
);
