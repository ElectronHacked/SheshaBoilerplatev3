import { createContext } from 'react';
import { RegisterViewModel } from 'useApis/swag';

export interface IRegistrationState {
  isRegistering?: boolean;
  isRegisterError?: string;
  registeredResponse?: any;
}

export interface IRegistrationActions {
  registerUser?: (payload: RegisterViewModel) => void;
}

export const RegistrationStateContext = createContext<IRegistrationState>({});
export const RegistrationActionsContext = createContext<IRegistrationActions>({});
