import { AuthActionEnums } from './actions';
import { IAuthStateContext } from 'contexts/authContext';

export function authReducer(
  state: IAuthStateContext,
  { type, payload }: ReduxActions.Action<IAuthStateContext>
): IAuthStateContext {
  switch (type) {
    case AuthActionEnums.CheckAuth:
    case AuthActionEnums.LoginUser:
    case AuthActionEnums.LoginUserSuccess:
    case AuthActionEnums.LoginUserError:
    case AuthActionEnums.LogoutUser:
    case AuthActionEnums.LogoutUserSuccess:
    case AuthActionEnums.LogoutUserError:
    case AuthActionEnums.FetchUserData:
    case AuthActionEnums.FetchUserDataSuccess:
    case AuthActionEnums.FetchUserDataError:
    //#region Forgot password
    case AuthActionEnums.SendOtp:
    case AuthActionEnums.SendOtpSuccess:
    case AuthActionEnums.SendOtpError:
    case AuthActionEnums.VerifyOtp:
    case AuthActionEnums.VerifyOtpSuccess:
    case AuthActionEnums.VerifyOtpError:
    case AuthActionEnums.ResetPassword:
    case AuthActionEnums.ResetPasswordSuccess:
    case AuthActionEnums.ResetPasswordError:
    case AuthActionEnums.ToggleVerifyOtpModalVisibility:
      //#endregion
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
