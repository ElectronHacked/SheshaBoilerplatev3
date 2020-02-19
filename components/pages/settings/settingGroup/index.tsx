import React, { FC, ReactNode } from 'react';
import './styles.scss';

interface IProps {
  name: string;
  children?: ReactNode;
}

export const SettingGroup: FC<IProps> = ({ name, children }) => {
  return (
    <div className="setting-group">
      <div className="setting-group-header">
        <span>{name}</span>
      </div>
      <div className="setting-group-content">{children}</div>
    </div>
  );
};

export default SettingGroup;
