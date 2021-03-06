import { createContext } from 'react';
import { ILoginForm, IFlagsState, IFlagsSetters } from 'models';
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
  | 'resetPassword' /* NEW_IN_PROGRESS_FLAG_GOES_HERE */;
export type IFlagSucceededFlags =
  | 'isVerifyOtpModalVisible'
  | 'loginUser'
  | 'logoutUser'
  | 'fetchUserData'
  | 'sendOtp'
  | 'verifyOtp'
  | 'resetPassword' /* NEW_SUCCEEDED_FLAG_GOES_HERE */;
export type IFlagErrorFlags =
  | 'isVerifyOtpModalVisible'
  | 'loginUser'
  | 'logoutUser'
  | 'fetchUserData'
  | 'sendOtp'
  | 'verifyOtp'
  | 'resetPassword' /* NEW_ERROR_FLAG_GOES_HERE */;
export type IFlagActionedFlags =
  | 'isVerifyOtpModalVisible'
  | 'loginUser'
  | 'logoutUser'
  | 'fetchUserData'
  | 'sendOtp'
  | 'verifyOtp'
  | 'resetPassword' /* NEW_ACTIONED_FLAG_GOES_HERE */;

export interface IAuthStateContext
  extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
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
  extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
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
