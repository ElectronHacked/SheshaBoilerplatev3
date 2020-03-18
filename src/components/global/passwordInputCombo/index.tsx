import React, { FC } from 'react';
import { Form, Popover, Input, Icon } from 'antd';
import { passwordValidations, confirmPasswordValidations } from './utils';
import PasswordChecklist from '../passwordChecklist';
import ConfimPasswordChecklist from '../confimPasswordChecklist';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface IProps {
  readonly password: string;
  readonly confirmPassword: string;
  readonly setPassword: (value: string) => void;
  readonly setConfirmPassword: (value: string) => void;
}

const FormItem = Form.Item;

const PasswordInputCombo: FC<IProps> = ({ password, confirmPassword, setPassword, setConfirmPassword }) => {
  const handlePasswordChange = (e: ChangeEvent) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: ChangeEvent) => setConfirmPassword(e.target.value);

  return (
    <>
      <FormItem {...passwordValidations(password)}>
        <Popover
          placement="right"
          title="The password must contain the following conditions"
          content={<PasswordChecklist password={password} />}
          trigger="click"
        >
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Popover>
      </FormItem>

      <FormItem {...confirmPasswordValidations(password, confirmPassword)}>
        <Popover
          placement="right"
          content={<ConfimPasswordChecklist password={password} confirmPassword={confirmPassword} />}
          trigger="click"
        >
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </Popover>
      </FormItem>
    </>
  );
};

export default PasswordInputCombo;
