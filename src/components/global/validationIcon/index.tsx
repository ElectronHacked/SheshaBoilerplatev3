import React, { FC } from 'react';
import { Icon } from 'antd';
import './styles.scss';

interface IProps {
  valid?: boolean;
}

export const ValidationIcon: FC<IProps> = ({ valid }) =>
  valid ? (
    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  ) : (
    <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />
  );

export default ValidationIcon;
