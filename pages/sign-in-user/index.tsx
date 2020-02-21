import React, { FC, useState } from 'react';
import { useAccountState, useAccountActions } from 'providers/account';
import { Button, Alert, Form, Input, Icon, Checkbox } from 'antd';
import './styles.scss';
import 'antd/dist/antd.css';

interface IProps {
  readonly form?: any;
}

export const Login: FC<IProps> = () => {
  const { isLoggingIn, loginUserError } = useAccountState();
  const { loginUser } = useAccountActions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginClick = () => {
    loginUser({ email, password, rememberMe });
  };
  // const handleLogin = () => loginUser({ email: 'user@email.com', password: 'Password@123', rememberMe: true });

  return (
    <div className="login">
      <div className="base-container">
        <div className="header">TransportWise</div>
        <div className="header2">Login</div>
        <div className="image">
          <img src="/static/images/town.png" />
          {loginUserError && <Alert message={loginUserError} type="error" showIcon closable />}
        </div>
        <Form>
          <Form.Item>
            <Input
              prefix={<Icon type="mail" />}
              placeholder="Enter Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Input
              autoComplete="on"
              prefix={<Icon type="lock" />}
              placeholder="Password"
              required
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Checkbox value={rememberMe} onChange={e => setRememberMe(!e.target.value)}>
              Remember me
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              onClick={handleLoginClick}
              loading={isLoggingIn}
            >
              {isLoggingIn ? 'Signing in....' : 'LogIn'}
            </Button>
            <div className="oneLine">
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              Or <a href="/register">register now!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
