import React, { FC, ReactNode } from 'react';
import './styles.scss';

interface IProps {
  children?: ReactNode;
}

export const SettingPanel: FC<IProps> = ({ children }) => {
  return (
    <div className="setting-panel">
      {/* <div className="setting-panel-header">
        <span>Application Settings</span>
      </div> */}

      <div className="setting-panel-body">{children}</div>
    </div>
  );
};

export default SettingPanel;
