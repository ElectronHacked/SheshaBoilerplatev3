import { createContext } from 'react';
import { ILoginInfo, ILoginForm, IFlagsState, IFlagsSetters } from 'models';
import {
  UserResetPasswordSendOtpQueryParams,
  ResetPasswordSendOtpResponse,
  ResetPasswordVerifyOtpInput,
  ResetPasswordVerifyOtpResponse,
  ResetPasswordUsingTokenInput,
  AjaxResponseBase,
} from 'api/user';
import { UserLoginInfoDto } from 'api/session';

export type IFlagProgressFlags =
  | 'isVerifyOtpModalVisible'
  | 'loginUser'
  | 'logoutUser'
  | 'fetchUserData'
  | 'sendOtp'
  | 'verifyOtp'
  | 'resetPassword';
export type IFlagSucceededFlags =
  | 'isVerifyOtpModalVisible'
  | 'loginUser'
  | 'logoutUser'
  | 'fetchUserData'
  | 'sendOtp'
  | 'verifyOtp'
  | 'resetPassword';
export type IFlagFailedFlags =
  | 'isVerifyOtpModalVisible'
  | 'loginUser'
  | 'logoutUser'
  | 'fetchUserData'
  | 'sendOtp'
  | 'verifyOtp'
  | 'resetPassword';
export type IFlagActionedFlags =
  | 'isVerifyOtpModalVisible'
  | 'loginUser'
  | 'logoutUser'
  | 'fetchUserData'
  | 'sendOtp'
  | 'verifyOtp'
  | 'resetPassword';

export interface IAuthStateContext
  extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
  userNameOrEmailAddress?: string;
  password?: string;
  isLoggingInUser?: boolean;
  isLoggingOutUser?: boolean;
  isCheckingAuth?: boolean;
  hasCheckedReauth?: boolean;
  authErrorMsg?: string;
  isReauth?: boolean; // We set this field to true if login fails while we were `isCheckingAuth`
  isFetchingUserInfo?: boolean;
  loginInfo?: UserLoginInfoDto;
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

export interface IAuthActionsContext
  extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
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
