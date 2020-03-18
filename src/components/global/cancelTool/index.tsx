import React, { FC } from 'react';
import { Icon } from 'antd';
import './styles.scss';

interface IProps {
  onCancel: (args: any) => void;
}

export const CancelTool: FC<IProps> = ({ onCancel }) => (
  <div className="cancel-tool" onClick={onCancel}>
    <Icon type="close" />
  </div>
);

export default CancelTool;
