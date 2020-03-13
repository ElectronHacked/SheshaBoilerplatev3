import { createContext } from 'react';
import { ILoginInfo, ILoginForm } from 'models';
import {
  UserResetPasswordSendOtpQueryParams,
  ResetPasswordSendOtpResponse,
  ResetPasswordVerifyOtpInput,
  ResetPasswordVerifyOtpResponse,
  ResetPasswordUsingTokenInput,
  AjaxResponseBase,
} from 'useApis';

export interface IAuthStateContext {
  userNameOrEmailAddress?: string;
  password?: string;
  isLoggingInUser?: boolean;
  isLoggingOutUser?: boolean;
  isCheckingAuth?: boolean;
  hasCheckedReauth?: boolean;
  authErrorMsg?: string;
  isReauth?: boolean; // We set this field to true if login fails while we were `isCheckingAuth`
  isFetchingUserInfo?: boolean;
  loginInfo?: ILoginInfo;
  requireChangePassword?: boolean;
  loginUserSuccessful?: boolean | null;

  //#region Forgot password
  isSendingOtp?: boolean;
  isSendOtpSuccessful?: boolean;
  sendOtpError?: string;
  sendOtpReqPayload?: UserResetPasswordSendOtpQueryParams;
  sendOtpResPayload?: ResetPasswordSendOtpResponse;
  isVerifyingOtp?: boolean;
  isVerifyOtpSuccessful?: boolean;
  verifyOtpError?: string;
  isVerifyOtpModalShown?: boolean;
  verifyOtpReqPayload?: ResetPasswordVerifyOtpInput;
  verifyOtpResPayload?: ResetPasswordVerifyOtpResponse;
  isResettingPasswordUsingToken?: boolean;
  isResetPasswordUsingTokenSuccessful?: boolean;
  resetPasswordUsingTokenError?: string;
  resetPasswordUsingTokenReqPayload?: ResetPasswordUsingTokenInput;
  resetPasswordUsingTokenResPayload?: AjaxResponseBase;
  //#endregion
}

export interface IAuthActionsContext {
  checkAuth?: () => void;
  loginUser?: (loginFormData: ILoginForm) => void;
  // loginUserSuccess?: (loginInfo: ILoginInfo) => void;
  // loginUserError?: (authErrorMsg: string, isReauth: boolean) => void;
  logoutUser?: () => void;
  // logoutUserSuccess?: () => void;
  // logoutUserError?: (authErrorMsg: string) => void;
  fetchUserInfo?: () => void;
  // fetchUserInfoSuccess?: (userInfo: any) => void;
  // fetchUserInfoError?: () => void;

  //#region Forgot password
  sendOtp?: (payload: UserResetPasswordSendOtpQueryParams) => void;
  verifyOtp?: (payload: ResetPasswordVerifyOtpInput) => void;
  resetPassword?: (payload: ResetPasswordUsingTokenInput) => void;
  toggleVerifyOtpModalVisibility?: (value: boolean) => void;
  //#endregion
}

export const AuthStateContext = createContext<IAuthStateContext>({});

export const AuthActionsContext = createContext<IAuthActionsContext | undefined>(undefined);
