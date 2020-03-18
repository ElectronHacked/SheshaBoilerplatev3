import React, { FC } from 'react';
import { ValidationIcon } from 'components';
import './styles.scss';

interface IProps {
  readonly password?: string;
  readonly confirmPassword?: string;
}

export const ConfimPasswordChecklist: FC<IProps> = ({ password, confirmPassword }) => {
  return (
    <div className="confim-password-checklist">
      {<ValidationIcon valid={Boolean(password) && password === confirmPassword} />} confirm password must match the
      password
    </div>
  );
};

export default ConfimPasswordChecklist;
