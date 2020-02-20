import { LoginViewModel } from 'useApis/swag';
import { createContext } from 'react';

export interface IAccountStateContext {
  isLoggingIn?: boolean;
  loginUserError?: string;
  loginResponse?: any;
}

export interface IAccountActionsContext {
  loginUser?: (payload: LoginViewModel) => void;
}

export const AccountStateContext = createContext<IAccountStateContext>({});

export const AccountActionsContext = createContext<IAccountActionsContext>({});
