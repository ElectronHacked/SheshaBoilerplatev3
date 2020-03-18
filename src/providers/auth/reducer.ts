import { AuthActionEnums } from './actions';
import { IAuthStateContext } from 'providers/auth/contexts';
import flagsReducer from '../utils/flagsReducer';

export function authReducer(
  incomingState: IAuthStateContext,
  action: ReduxActions.Action<IAuthStateContext>
): IAuthStateContext {
  //#region Register flags reducer
  const state = flagsReducer(incomingState, action);

  const { type, payload } = action;
  //#endregion

  switch (type) {
    case AuthActionEnums.CheckAuthAction:
    case AuthActionEnums.LoginUserRequest:
    case AuthActionEnums.LoginUserSuccess:
    case AuthActionEnums.LoginUserError:
    case AuthActionEnums.LogoutUserRequest:
    case AuthActionEnums.LogoutUserSuccess:
    case AuthActionEnums.LogoutUserError:
    case AuthActionEnums.FetchUserDataRequest:
    case AuthActionEnums.FetchUserDataSuccess:
    case AuthActionEnums.FetchUserDataError:
    //#region Forgot password
    case AuthActionEnums.SendOtpRequest:
    case AuthActionEnums.SendOtpSuccess:
    case AuthActionEnums.SendOtpError:
    case AuthActionEnums.VerifyOtpRequest:
    case AuthActionEnums.VerifyOtpSuccess:
    case AuthActionEnums.VerifyOtpError:
    case AuthActionEnums.ResetPasswordRequest:
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
