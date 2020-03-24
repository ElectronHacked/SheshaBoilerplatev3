import { createAction } from 'redux-actions';
import { IAuthStateContext } from './contexts';
import { ILoginForm } from 'models';
import {
  ResetPasswordSendOtpResponse,
  UserResetPasswordSendOtpQueryParams,
  ResetPasswordVerifyOtpResponse,
  ResetPasswordUsingTokenInput,
  AjaxResponseBase,
} from 'api/user';
import { UserLoginInfoDto } from 'api/session';
export enum AuthActionEnums {
  CheckAuthAction = 'CHECK_AUTH_ACTION',
  LoginUserRequest = 'LOGIN_USER_REQUEST',
  LoginUserSuccess = 'LOGIN_USER_SUCCESS',
  LoginUserError = 'LOGIN_USER_ERROR',
  LogoutUserRequest = 'LOGOUT_USER_REQUEST',
  LogoutUserSuccess = 'LOGOUT_USER_SUCCESS',
  LogoutUserError = 'LOGOUT_USER_ERROR',
  FetchUserDataRequest = 'FETCH_USER_DATA_REQUEST',
  FetchUserDataSuccess = 'FETCH_USER_DATA_SUCCESS',
  FetchUserDataError = 'FETCH_USER_DATA_ERROR',

  //#region Rest Password
  SendOtpRequest = 'SEND_OTP_REQUEST',
  SendOtpSuccess = 'SEND_OTP_SUCCESS',
  SendOtpError = 'SEND_OTP_ERROR',
  VerifyOtpRequest = 'VERIFY_OTP_REQUEST',
  VerifyOtpSuccess = 'VERIFY_OTP_SUCCESS',
  VerifyOtpError = 'VERIFY_OTP_ERROR',
  ResetPasswordRequest = 'RESETpASSWORD_REQUEST',
  ResetPasswordSuccess = 'RESETpASSWORD_SUCCESS',
  ResetPasswordError = 'RESETpASSWORD_ERROR',
  ToggleVerifyOtpModalVisibility = 'TOGGLE_VERIFY_OTP_MODAL_VISIBILITY',
  //#endregion

  /* NEW_ACTION_TYPE_GOES_HERE */
}

export const checkAuthAction = createAction<IAuthStateContext>(AuthActionEnums.CheckAuthAction, () => ({
  isCheckingAuth: true,
}));

//#region  Login user
export const loginUserAction = createAction<IAuthStateContext, ILoginForm>(
  AuthActionEnums.LoginUserRequest,
  loginFormData => ({
    isLoggingInUser: true,
    authErrorMsg: null,
    ...loginFormData,
  })
);

export const loginUserSuccessAction = createAction<IAuthStateContext, UserLoginInfoDto>(
  AuthActionEnums.LoginUserSuccess,
  loginInfo => ({
    isLoggingInUser: false,
    isCheckingAuth: false,
    authErrorMsg: null,
    loginInfo,
    username: '',
    password: '',
  })
);

export const loginUserErrorAction = createAction<IAuthStateContext, string, boolean>(
  AuthActionEnums.LoginUserError,
  (authErrorMsg, isReauth) => ({
    isLoggingInUser: false,
    isCheckingAuth: false,
    authErrorMsg,
    isReauth,
  })
);
//#endregion

//#region Logout user
export const logoutUserAction = createAction<IAuthStateContext>(AuthActionEnums.LogoutUserRequest, () => ({
  isLoggingOutUser: true,
  authErrorMsg: null,
}));

export const logoutUserSuccessAction = createAction<IAuthStateContext>(AuthActionEnums.LogoutUserSuccess, () => ({
  isLoggingOutUser: false,
  authErrorMsg: null,
}));

export const logoutUserErrorAction = createAction<IAuthStateContext, string>(
  AuthActionEnums.LogoutUserError,
  authErrorMsg => ({
    isLoggingOutUser: true,
    authErrorMsg,
  })
);
//#endregion

//#region Forgot password
export const sendOtpAction = createAction<IAuthStateContext, UserResetPasswordSendOtpQueryParams>(
  AuthActionEnums.SendOtpRequest,
  sendOtpReqPayload => ({ sendOtpReqPayload, isSendingOtp: true, sendOtpError: null, verifyOtpError: null })
);

export const sendOtpSuccessAction = createAction<IAuthStateContext, ResetPasswordSendOtpResponse>(
  AuthActionEnums.SendOtpSuccess,
  sendOtpResPayload => ({
    sendOtpResPayload,
    isSendingOtp: false,
    isSendOtpSuccessful: true,
    isVerifyOtpModalShown: true,
  })
);

export const sendOtpErrorAction = createAction<IAuthStateContext, string>(
  AuthActionEnums.SendOtpError,
  sendOtpError => ({ sendOtpError, isSendingOtp: false })
);

export const verifyOtpAction = createAction<IAuthStateContext, UserResetPasswordSendOtpQueryParams>(
  AuthActionEnums.VerifyOtpRequest,
  resetPasswordVerifyOtpPayload => ({ resetPasswordVerifyOtpPayload, isVerifyingOtp: true })
);

export const verifyOtpSuccessAction = createAction<IAuthStateContext, ResetPasswordVerifyOtpResponse>(
  AuthActionEnums.VerifyOtpSuccess,
  verifyOtpResPayload => ({
    verifyOtpResPayload,
    isVerifyingOtp: false,
    resetPasswordVerifyOtpPayload: null,
    isVerifyOtpSuccessful: true,
    isVerifyOtpModalShown: false,
  })
);

export const verifyOtpErrorAction = createAction<IAuthStateContext, string>(
  AuthActionEnums.VerifyOtpError,
  verifyOtpError => ({ verifyOtpError, isVerifyingOtp: false })
);

export const resetPasswordAction = createAction<IAuthStateContext, ResetPasswordUsingTokenInput>(
  AuthActionEnums.SendOtpRequest,
  resetPasswordUsingTokenReqPayload => ({ resetPasswordUsingTokenReqPayload, isResettingPasswordUsingToken: true })
);

export const resetPasswordSuccessAction = createAction<IAuthStateContext, AjaxResponseBase>(
  AuthActionEnums.SendOtpRequest,
  resetPasswordUsingTokenResPayload => ({
    resetPasswordUsingTokenResPayload,
    isResettingPasswordUsingToken: false,
    isResetPasswordUsingTokenSuccessful: true,
  })
);

export const resetPasswordErrorAction = createAction<IAuthStateContext, string>(
  AuthActionEnums.SendOtpRequest,
  resetPasswordUsingTokenError => ({ resetPasswordUsingTokenError, isResettingPasswordUsingToken: false })
);

export const toggleVerifyOtpModalVisibilityAction = createAction<IAuthStateContext, boolean>(
  AuthActionEnums.ToggleVerifyOtpModalVisibility,
  isVerifyOtpModalShown => ({ isVerifyOtpModalShown })
);
//#endregion

/* NEW_ACTION_GOES_HERE */
