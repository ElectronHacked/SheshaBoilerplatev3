import React from 'react';

import { UnAuthedAccountPageLayout } from 'components/layouts';
import { useAccountState, useAccountActions } from 'providers/account';
import { Button } from 'antd';

export const Login = () => {
  const { isLoggingIn, loginResponse } = useAccountState();
  const { loginUser } = useAccountActions();

  // const handleLogin = () => loginUser({ email: 'user@email.com', password: 'Password@123', rememberMe: true });

  return (
    <UnAuthedAccountPageLayout
      className="login-page"
      heading="Welcome!"
      hint="Please enter your personal details in order to access your profile."
    >
      <div>{isLoggingIn ? 'Is' : 'Is not'} logging in</div>
      {loginResponse && <div>{JSON.stringify(loginResponse, null, 2)}</div>}

      <Button
        type="primary"
        block
        onClick={() => loginUser({ email: 'email@address.com', password: 'Password@123', rememberMe: true })}
        loading={isLoggingIn}
      >
        Login
      </Button>
    </UnAuthedAccountPageLayout>
  );
};

export default Login;
