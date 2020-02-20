import { createAction } from 'redux-actions';

import { IAccountStateContext } from './contexts';

export enum AccountActions {
  LoginUser = 'LOGIN',
  LoginUserSuccess = 'LOGIN_USER_SUCCESS',
  LoginUserError = 'LOGIN_USER_ERROR',
}

//#region  Login user
export const loginUserAction = createAction<IAccountStateContext>(AccountActions.LoginUser, () => ({
  isLoggingIn: true,
  loginUserError: null,
}));

export const loginUserSuccessAction = createAction<IAccountStateContext, any>(
  AccountActions.LoginUserSuccess,
  loginResponse => ({ isLoggingIn: false, loginResponse })
);

export const loginUserErrorAction = createAction<IAccountStateContext, string>(
  AccountActions.LoginUserError,
  loginUserError => ({
    isLoggingIn: false,
    loginUserError,
  })
);
