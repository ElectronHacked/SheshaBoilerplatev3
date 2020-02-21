import { AccountStateContext, AccountActionsContext } from './contexts';
import React, { PropsWithChildren, FC, useContext, useReducer } from 'react';
import { accountReducer } from './reducer';
import { LoginViewModel, useAccountLogin } from 'useApis/swag';
import { loginUserAction, loginUserSuccessAction, loginUserErrorAction } from './actions';

interface IProps extends PropsWithChildren<any> {}

const AccountProvider: FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, {});

  const { mutate: loginUserHttp } = useAccountLogin({});

  const loginUser = (payload: LoginViewModel) => {
    dispatch(loginUserAction());

    loginUserHttp(payload)
      .then(data => {
        dispatch(loginUserSuccessAction(data));
        window.location.href = 'public-transport';
      })
      .catch(() => {
        dispatch(loginUserErrorAction('Invalide Email or Password, please check your details and try again.'));
      });
  };

  return (
    <AccountStateContext.Provider value={state}>
      <AccountActionsContext.Provider value={{ loginUser }}>{children}</AccountActionsContext.Provider>
    </AccountStateContext.Provider>
  );
};

function useAccountState() {
  const context = useContext(AccountStateContext);
  if (context === undefined) {
    throw new Error('useAccountState must be used within a CountProvider');
  }
  return context;
}

function useAccountActions() {
  const context = useContext(AccountActionsContext);
  if (context === undefined) {
    throw new Error('useAccountActions must be used within a CountProvider');
  }
  return context;
}

export { AccountProvider, useAccountState, useAccountActions };
