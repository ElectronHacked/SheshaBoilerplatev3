import React, { FC } from 'react';
import './styles.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from 'antd';

interface IProps {
  title: string;
  linkTo: string;
  icon?: string;
}

export const SettingGroupLink: FC<IProps> = ({ title, linkTo, icon }) => {
  const { pathname } = useRouter();

  return (
    <div className={`setting-group-link ${pathname && linkTo && pathname === linkTo && 'setting-group-link-active'}`}>
      <Link href={linkTo}>
        <a>
          {icon && <Icon type={icon} />}&nbsp;
          {title}
        </a>
      </Link>
    </div>
  );
};

export default SettingGroupLink;
