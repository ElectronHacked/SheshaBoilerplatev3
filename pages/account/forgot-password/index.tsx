import React, { FC, useContext } from 'react';
import './styles.scss';
import { AuthStateContext, AuthActionsContext } from 'contexts/authContext';
import { useFormState } from 'react-use-form-state';
import { UserResetPasswordSendOtpQueryParams } from 'useApis';
import { Form, Input, Icon, Button, Alert } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { UnAuthedAccountPageLayout } from 'components/layouts';
import { VerifyOtpModal } from 'components';
import { useRouter } from 'next/router';
import { LOGIN_PAGE_URL } from 'routes';

interface IProps {}

export const ForgotPassword: FC<IProps> = () => {
  const router = useRouter();
  const { isSendingOtp, sendOtpError } = useContext(AuthStateContext);
  const { sendOtp } = useContext(AuthActionsContext);

  const [formState, { text }] = useFormState<UserResetPasswordSendOtpQueryParams>({});

  const getInputValidationMessage = key => {
    return formState.touched[key] && !formState.validity[key] ? 'error' : '';
  };

  const handleSendOtp = () => {
    if (formState.values.mobileNo) {
      // sendOtp({ mobileNo: `+27${formState.values.mobileNo}` });
      sendOtp({ mobileNo: formState.values.mobileNo });
    }
  };

  return (
    <UnAuthedAccountPageLayout
      className="forgot-password-page"
      heading="Forgot Password"
      hint="Please provide your registered cell number"
    >
      {sendOtpError && <Alert message={sendOtpError} type="error" />}

      <Alert
        message={
          <span>
            Contact System Administrator on <strong>012 345 6789</strong> to retrieve your username
          </span>
        }
      />

      <Form>
        <FormItem validateStatus={getInputValidationMessage('mobileNo')} help="This field is required">
          <Input
            // addonBefore="+27"
            {...text('mobileNo')}
            prefix={<Icon type="mobile" />}
            placeholder="Phone Number"
            required
          />
        </FormItem>

        <FormItem className="un-authed-btn-container">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            onClick={handleSendOtp}
            loading={isSendingOtp}
            disabled={!formState.values.mobileNo}
          >
            {isSendingOtp ? 'Sending Otp....' : 'Send Otp'}
          </Button>
        </FormItem>

        <FormItem>
          <Button type="link" block onClick={() => router.push(LOGIN_PAGE_URL)}>
            Back To Login Page
          </Button>
        </FormItem>
      </Form>

      <VerifyOtpModal />
    </UnAuthedAccountPageLayout>
  );
};

export default ForgotPassword;
