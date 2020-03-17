import React, { FC, useReducer, useContext, useEffect, PropsWithChildren } from 'react';
import { authReducer } from './reducer';
import { AuthStateContext, AuthActionsContext } from './contexts';
import {
  checkAuthAction,
  loginUserAction,
  loginUserSuccessAction,
  loginUserErrorAction,
  logoutUserAction,
  logoutUserSuccessAction,
  logoutUserErrorAction,
  sendOtpAction,
  verifyOtpAction,
  resetPasswordAction,
  sendOtpSuccessAction,
  sendOtpErrorAction,
  verifyOtpSuccessAction,
  verifyOtpErrorAction,
  resetPasswordSuccessAction,
  resetPasswordErrorAction,
  toggleVerifyOtpModalVisibilityAction,
  // fetchUserInfoAction,
} from './actions';
import { ILoginForm, IHttpResponse, IAccessToken } from 'models';
import { getAccessToken, removeAccessToken, saveUserToken } from 'utils/auth';
import { useRouter } from 'next/router';
import { LOGIN_PAGE_URL, DASHBOARD_PAGE_URL, CHANGE_PASSWORD_PAGE_URL, RESET_PASSWORD_PAGE_URL } from 'routes';
import {
  useUserResetPasswordVerifyOtp,
  useUserResetPasswordUsingToken,
  ResetPasswordVerifyOtpInput,
  UserResetPasswordSendOtpQueryParams,
  ResetPasswordUsingTokenInput,
  AjaxResponseBase,
  ResetPasswordVerifyOtpResponse,
  ResetPasswordSendOtpResponseAjaxResponse,
} from 'api/user';
import { useRouteState } from 'providers/route';
import { getFlagSetters } from 'providers/utils/flagsSetters';
import { useTokenAuthAuthenticate, useTokenAuthSignOff } from 'api/tokenAuth';
import { useSessionGetCurrentLoginInformations } from 'api/session';
import { useMutateHttp } from 'hooks';

const AuthProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {});

  const router = useRouter();

  const { nextRoute } = useRouteState();

  const { mutate: loginUserRequest } = useTokenAuthAuthenticate(null);

  const { mutate: signOffRequest } = useTokenAuthSignOff(null);

  const { mutate: resetPasswordSendOtp } = useMutateHttp({ path: '/api/services/app/User/ResetPasswordSendOtp' });

  const { mutate: verifyOtpHttp } = useUserResetPasswordVerifyOtp({});
  const { mutate: resetPasswordHttp } = useUserResetPasswordUsingToken({});

  const {
    loading: fetchingUserInfo,
    refetch: fetchUserInfoRequest,
    error: fetchUserInfoErrorResult,
    data: userInfoData,
  } = useSessionGetCurrentLoginInformations({
    lazy: true,
  });

  useEffect(() => {
    if (!fetchingUserInfo) {
      if (userInfoData) {
        dispatch(loginUserSuccessAction(userInfoData.result.user));

        if (state.requireChangePassword) {
          router.push(CHANGE_PASSWORD_PAGE_URL);
        } else {
          if (router.route === LOGIN_PAGE_URL) {
            const returnUrl = router.query?.returnUrl as string;
            router.push(returnUrl ?? DASHBOARD_PAGE_URL);
          }
        }
      }

      if (fetchUserInfoErrorResult) {
        dispatch(loginUserErrorAction('Oops, something went wrong', true));
      }
    }
  }, [fetchingUserInfo && state.hasCheckedReauth]);

  useEffect(() => {
    if (state.loginUserSuccessful) {
      if (nextRoute) {
        router.push(nextRoute);
      } else {
        router.push(DASHBOARD_PAGE_URL);
      }
    }
  }, [state.loginUserSuccessful]);

  const checkAuth = () => {
    dispatch(checkAuthAction());

    const tokenResult = getAccessToken();

    if (tokenResult && !state.loginInfo) {
      fetchUserInfoRequest();
    } else {
      if (nextRoute) {
        router.push(`${LOGIN_PAGE_URL}?returnUrl=${nextRoute}`);
      } else {
        router.push(LOGIN_PAGE_URL);
      }
    }
  };

  const loginUser = (loginFormData: ILoginForm) => {
    dispatch(loginUserAction(loginFormData));

    loginUserRequest(loginFormData)
      .then(data => {
        if (data) {
          const tokenResult = saveUserToken(data.result as IAccessToken);

          // Token saved successfully
          if (tokenResult) {
            // Let's fetch the user info
            fetchUserInfoRequest();
          }
        } else {
          dispatch(loginUserErrorAction(data.error.details || data.error.message, false));
        }
      })
      .catch((err: IHttpResponse<IAccessToken>) => {
        const {
          data: {
            error: { message, details },
          },
        } = err;

        dispatch(loginUserErrorAction(`${message} ${details}`, false));
      });
  };

  const logoutUser = () => {
    const LOGOUT_ERROR_MSG = 'Logout Error';
    dispatch(logoutUserAction());

    const result = removeAccessToken();

    const signOffError = () => dispatch(logoutUserErrorAction(LOGOUT_ERROR_MSG));

    signOffRequest(null)
      .then(() => {
        if (result) {
          dispatch(logoutUserSuccessAction());
          router.push(LOGIN_PAGE_URL);
        } else {
          signOffError();
        }
      })
      .catch(() => {
        signOffError();
      });
  };

  const sendOtp = (payload: UserResetPasswordSendOtpQueryParams) => {
    dispatch(sendOtpAction(payload));

    const SEND_OTP_ERROR_MSG = 'Sorry, there seems to be a problem with the mobile number you provided';

    resetPasswordSendOtp(null, { mobileNo: payload.mobileNo })
      .then(({ data }: { data: ResetPasswordSendOtpResponseAjaxResponse }) => {
        if (data.error) {
          dispatch(sendOtpErrorAction(SEND_OTP_ERROR_MSG));
        } else {
          dispatch(sendOtpSuccessAction(data.result));
        }
      })
      .catch(() => {
        dispatch(sendOtpErrorAction(SEND_OTP_ERROR_MSG));
      });
  };

  const verifyOtp = (payload: ResetPasswordVerifyOtpInput) => {
    dispatch(verifyOtpAction(payload));

    verifyOtpHttp(payload)
      .then(data => {
        const { isSuccess, token, username, errorMessage } = (data as {
          result: ResetPasswordVerifyOtpResponse;
        }).result;

        if (isSuccess) {
          dispatch(verifyOtpSuccessAction({ token, username }));
          router.push(RESET_PASSWORD_PAGE_URL);
        } else {
          dispatch(verifyOtpErrorAction(errorMessage));
        }
      })
      .catch(() => {
        dispatch(verifyOtpErrorAction('Sorry, there seems to be a problem with the OTP you provided'));
      });
  };

  const resetPassword = (payload: ResetPasswordUsingTokenInput) => {
    dispatch(resetPasswordAction(payload));
    resetPasswordHttp(payload)
      .then(data => {
        const res = data as AjaxResponseBase;
        if (res.success) {
          dispatch(resetPasswordSuccessAction(res));

          setTimeout(() => {
            router.push(LOGIN_PAGE_URL);
          }, 5000);
        } else {
          dispatch(resetPasswordErrorAction('Sorry, there was an error resetting your password'));
        }
      })
      .catch(() => {
        dispatch(resetPasswordErrorAction('Sorry, there was an error resetting your password'));
      });
  };

  const toggleVerifyOtpModalVisibility = (value: boolean) => dispatch(toggleVerifyOtpModalVisibilityAction(value));

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionsContext.Provider
        value={{
          ...getFlagSetters(dispatch),
          checkAuth,
          loginUser,
          logoutUser,
          sendOtp,
          verifyOtp,
          resetPassword,
          toggleVerifyOtpModalVisibility,
        }}
      >
        {children}
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
};

function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a CountProvider');
  }
  return context;
}

function useAuthActions() {
  const context = useContext(AuthActionsContext);
  if (context === undefined) {
    throw new Error('useAuthActions must be used within a CountProvider');
  }
  return context;
}

function useAuth() {
  return { ...useAuthActions(), ...useAuthState() };
}

export { AuthProvider, useAuthState, useAuthActions, useAuth };
