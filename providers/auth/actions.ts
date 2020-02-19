import { createAction } from 'redux-actions';

import { IAuthStateContext } from 'contexts/authContext';

import { ILoginForm, ILoginInfo } from 'models';
import {
  ResetPasswordSendOtpResponse,
  UserResetPasswordSendOtpQueryParams,
  ResetPasswordVerifyOtpResponse,
  ResetPasswordUsingTokenInput,
  AjaxResponseBase,
} from 'useApis';

export enum AuthActionEnums {
  CheckAuth = 'CHECK_AUTH',
  LoginUser = 'LOGIN_USER',
  LoginUserSuccess = 'LOGIN_USER_SUCCESS',
  LoginUserError = 'LOGIN_USER_ERROR',
  LogoutUser = 'LOGOUT_USER',
  LogoutUserSuccess = 'LOGOUT_USER_SUCCESS',
  LogoutUserError = 'LOGOUT_USER_ERROR',
  FetchUserData = 'FETCH_USER_DATA',
  FetchUserDataSuccess = 'FETCH_USER_DATA_SUCCESS',
  FetchUserDataError = 'FETCH_USER_DATA_ERROR',

  //#region Rest Password
  SendOtp = 'SEND_OTP',
  SendOtpSuccess = 'SEND_OTP_SUCCESS',
  SendOtpError = 'SEND_OTP_ERROR',
  VerifyOtp = 'VERIFY_OTP',
  VerifyOtpSuccess = 'VERIFY_OTP_SUCCESS',
  VerifyOtpError = 'VERIFY_OTP_ERROR',
  ResetPassword = 'RESETpASSWORD',
  ResetPasswordSuccess = 'RESETpASSWORD_SUCCESS',
  ResetPasswordError = 'RESETpASSWORD_ERROR',
  ToggleVerifyOtpModalVisibility = 'TOGGLE_VERIFY_OTP_MODAL_VISIBILITY',
  //#endregion
}

export const checkAuthAction = createAction<IAuthStateContext>(AuthActionEnums.CheckAuth, () => ({
  isCheckingAuth: true,
}));

//#region  Login user
export const loginUserAction = createAction<IAuthStateContext, ILoginForm>(
  AuthActionEnums.LoginUser,
  loginFormData => ({
    isLoggingInUser: true,
    authErrorMsg: null,
    ...loginFormData,
  })
);

export const loginUserSuccessAction = createAction<IAuthStateContext, ILoginInfo>(
  AuthActionEnums.LoginUserSuccess,
  loginInfo => ({
    isLoggingInUser: false,
    isCheckingAuth: false,
    authErrorMsg: null,
    loginInfo,
    username: '',
    password: '',
    // resetPasswordUsingTokenReqPayload: null,
    // sendOtpReqPayload: null,
    // sendOtpResPayload: null,
    // verifyOtpReqPayload: null,
    // verifyOtpResPayload: null,
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
export const logoutUserAction = createAction<IAuthStateContext>(AuthActionEnums.LogoutUser, () => ({
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
  AuthActionEnums.SendOtp,
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
  AuthActionEnums.VerifyOtp,
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
  AuthActionEnums.SendOtp,
  resetPasswordUsingTokenReqPayload => ({ resetPasswordUsingTokenReqPayload, isResettingPasswordUsingToken: true })
);

export const resetPasswordSuccessAction = createAction<IAuthStateContext, AjaxResponseBase>(
  AuthActionEnums.SendOtp,
  resetPasswordUsingTokenResPayload => ({
    resetPasswordUsingTokenResPayload,
    isResettingPasswordUsingToken: false,
    isResetPasswordUsingTokenSuccessful: true,
  })
);

export const resetPasswordErrorAction = createAction<IAuthStateContext, string>(
  AuthActionEnums.SendOtp,
  resetPasswordUsingTokenError => ({ resetPasswordUsingTokenError, isResettingPasswordUsingToken: false })
);

export const toggleVerifyOtpModalVisibilityAction = createAction<IAuthStateContext, boolean>(
  AuthActionEnums.ToggleVerifyOtpModalVisibility,
  isVerifyOtpModalShown => ({ isVerifyOtpModalShown })
);
//#endregion
