import React, { FC, useContext, useState } from 'react';
import './styles.scss';
import { Modal, Form, Button, Input, Alert } from 'antd';
import { AuthStateContext, AuthActionsContext } from 'contexts/authContext';

const FormItem = Form.Item;
interface IProps {}

export const VerifyOtpModal: FC<IProps> = () => {
  const {
    isVerifyOtpModalShown,
    isVerifyingOtp,
    isSendingOtp,
    sendOtpReqPayload,
    sendOtpResPayload,
    verifyOtpError,
  } = useContext(AuthStateContext);

  const { mobileNo } = sendOtpReqPayload || {};
  const { operationId } = sendOtpResPayload || {};

  const { verifyOtp, sendOtp, toggleVerifyOtpModalVisibility } = useContext(AuthActionsContext);
  const [pin, setPin] = useState('');

  const handleVerifyOtp = () => {
    verifyOtp({ pin, mobileNo, operationId });
  };

  const handleHandleResendOtp = () => {
    if (sendOtpReqPayload) {
      sendOtp(sendOtpReqPayload);
    }
  };

  return (
    <Modal
      visible={isVerifyOtpModalShown}
      className="verify-otp-modal"
      title="Verify OTP"
      destroyOnClose
      onCancel={() => toggleVerifyOtpModalVisibility(false)}
      footer={null}
    >
      <Alert
        message={
          <span>
            A One-Time Pin has successfully been sent to <strong>{mobileNo}</strong>. Please check your phone and enter
            the OTP in the text below
          </span>
        }
        type="success"
      />

      {verifyOtpError && <Alert type="error" message={verifyOtpError} />}

      <Form>
        <FormItem>
          <Input
            placeholder="One-Time Pin"
            value={pin}
            onChange={e => setPin(e.target.value)}
            disabled={isSendingOtp || isVerifyingOtp}
          />
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            onClick={handleVerifyOtp}
            loading={isVerifyingOtp}
            disabled={!pin || (pin && !pin.trim().length)}
          >
            {isSendingOtp ? 'Verifying Otp....' : 'Verify Otp'}
          </Button>
        </FormItem>

        <FormItem>
          <Button
            type="link"
            htmlType="submit"
            className="login-form-button"
            block
            onClick={handleHandleResendOtp}
            loading={isSendingOtp}
            disabled={isSendingOtp}
          >
            {isSendingOtp ? 'Resending Otp....' : 'Resend Otp'}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default VerifyOtpModal;
