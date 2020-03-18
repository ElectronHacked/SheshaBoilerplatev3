import React, { FC, ReactNode } from 'react';
import './styles.scss';

interface IProps {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export const SettingsBody: FC<IProps> = ({ title, description, children }) => {
  return (
    <div className="settings-body scroll-y">
      <h2 className="settings-body-title">{title}</h2>
      <p className="settings-body-desc">{description}</p>
      <div className="settings-body-content">{children}</div>
    </div>
  );
};

export default SettingsBody;
