import React, { useContext } from 'react';
import { AuthContext, AuthActionsContext } from 'contexts';
import { DASHBOARD_PAGE_URL, FORGOT_PASSWORD_PAGE_URL } from 'routes';
import './styles.scss';
import { useRouter } from 'next/router';
import { AuthStateContext } from 'contexts/authContext';
import { useFormState } from 'react-use-form-state';
import { ILoginForm } from 'models';
import { Form, Alert, Input, Icon, Checkbox, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Link from 'next/link';
import { UnAuthedAccountPageLayout } from 'components/layouts';
import { useRouteState } from 'providers';

export const Login = () => {
  const { loginInfo } = useContext(AuthContext);
  const { nextRoute } = useRouteState();
  const { isLoggingInUser, isReauth, authErrorMsg } = useContext(AuthStateContext);
  const { loginUser } = useContext(AuthActionsContext);

  const [formState, { text, password }] = useFormState<ILoginForm>({});

  const handleLoginClick = () => {
    loginUser(formState.values);
  };

  const getInputValidationMessage = key => {
    return formState.touched[key] && !formState.validity[key] ? 'error' : '';
  };
  const user = loginInfo && loginInfo.user;

  const router = useRouter();

  // Make sure that you
  if (user) {
    if (nextRoute) {
      router.push(nextRoute);
    } else {
      router.push(DASHBOARD_PAGE_URL);
    }
  }

  return (
    <UnAuthedAccountPageLayout
      className="login-page"
      heading="Welcome!"
      hint="Please enter your personal details in order to access your profile."
    >
      <Form>
        {authErrorMsg && !isReauth && <Alert message={authErrorMsg} type="error" showIcon />}

        <FormItem validateStatus={getInputValidationMessage('userNameOrEmailAddress')} help="This field is required">
          <Input
            {...text('userNameOrEmailAddress')}
            prefix={<Icon type="mail" />}
            placeholder="Email Address"
            required
          />
        </FormItem>

        <FormItem validateStatus={getInputValidationMessage('password')} help="This field is required">
          <Input
            {...password('password')}
            autoComplete="on"
            prefix={<Icon type="lock" />}
            placeholder="Password"
            required
          />
        </FormItem>

        <FormItem className="un-authed-btn-container">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            onClick={handleLoginClick}
            loading={isLoggingInUser}
          >
            {isLoggingInUser ? 'Signing in....' : 'Sign In'}
          </Button>
        </FormItem>

        <div className="custom-form-item">
          <Checkbox>Remember me</Checkbox>

          <Link href={FORGOT_PASSWORD_PAGE_URL}>
            <a className="login-form-forgot">Forgot password</a>
          </Link>
        </div>
      </Form>
    </UnAuthedAccountPageLayout>
  );
};

export default Login;
