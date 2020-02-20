import React, { FC, useContext, useState, useEffect } from 'react';
import './styles.scss';
import { UnAuthedAccountPageLayout } from 'components/layouts';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Button, Result, Alert, notification, Icon } from 'antd';
import { AuthStateContext, AuthActionsContext } from 'contexts/authContext';
import { PasswordInputCombo } from 'components';
import { useRouter } from 'next/router';
import { LOGIN_PAGE_URL } from 'routes';

export const ResetPasssword: FC = () => {
  const { isResettingPasswordUsingToken, verifyOtpResPayload, isResetPasswordUsingTokenSuccessful } = useContext(
    AuthStateContext
  );
  const { resetPassword } = useContext(AuthActionsContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (isResetPasswordUsingTokenSuccessful) {
      notification.open({
        message: 'Password Reset Successful!',
        description: 'Your password has been reset successfully! You will be redirected to the login page very soon.',
        icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      });
    }
  }, [isResetPasswordUsingTokenSuccessful]);

  if (!verifyOtpResPayload || (verifyOtpResPayload && !verifyOtpResPayload.token) || !verifyOtpResPayload.username) {
    return (
      <div className="reset-passsword-page not-authorized">
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
            <Button type="primary" onClick={() => router.push(LOGIN_PAGE_URL)}>
              Back Login Page
            </Button>
          }
        />
      </div>
    );
  }

  const handleResetPassword = () => {
    const { token, username } = verifyOtpResPayload;

    resetPassword({ username, newPassword: password, token });
  };
  return (
    <UnAuthedAccountPageLayout
      className="reset-passsword-page"
      heading="Reset Your Password"
      hint="Please enter your new password below"
    >
     <Alert message="OTP verication was successful!" type="success" showIcon />

      <Form>
        <PasswordInputCombo {...{ password, confirmPassword, setPassword, setConfirmPassword }} />

        <FormItem className="un-authed-btn-container">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            onClick={handleResetPassword}
            loading={isResettingPasswordUsingToken}
            disabled={!password.trim().length || password !== confirmPassword}
          >
            {isResettingPasswordUsingToken ? 'Resetting Password....' : 'Reset Password'}
          </Button>
        </FormItem>
      </Form>
    </UnAuthedAccountPageLayout>
  );
};

export default ResetPasssword;
