import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Icon, Dropdown, Badge, Tooltip } from 'antd';
import { DASHBOARD_PAGE_URL, SETTINGS_URL, APP_SETTINGS_PERMISSION } from 'routes';
import { ProtectedContent } from 'components';
import { useAuthActions, useAuthState } from 'providers/auth';

const { Header } = Layout;

const LayoutHeader = () => {
  const { logoutUser } = useAuthActions();

  const { loginInfo } = useAuthState();

  return (
    <Header>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="../../../static/images/app-logo.png" />
          </a>
        </Link>
      </div>

      <div className="account-info">
        <div className="header-icon">
          <Icon type="search" />
        </div>
        <div className="header-icon">
          <Icon type="question" />
        </div>
        <div className="header-icon mail">
          <Tooltip placement="left" title="You have 5 unread messages">
            <Icon type="mail" />
            <Badge count={1} offset={[-7, -4]} dot />
          </Tooltip>
        </div>
        <div className="username">{loginInfo && `Hi, ${loginInfo.fullName}`}</div>
        <div className="user-avatar">
          <Dropdown
            placement="bottomRight"
            className="dropdown"
            overlay={
              <Menu className="overlay" style={{ top: 5 }}>
                {loginInfo && (
                  <Menu.Item className="account-dropdown-item" key="profile">
                    <Link href={DASHBOARD_PAGE_URL}>
                      <a>
                        <Icon type="user" /> Profile
                      </a>
                    </Link>
                  </Menu.Item>
                )}
                <Menu.Item className="account-dropdown-item" key="logout">
                  <div onClick={logoutUser}>
                    <Icon type="logout" /> Logout
                  </div>
                </Menu.Item>
              </Menu>
              // tslint:disable-next-line:jsx-curly-spacing
            }
          >
            <a className="ant-dropdown-link" href="#">
              <Icon type="user" />
            </a>
          </Dropdown>
        </div>
        <div className="header-icon">
          <ProtectedContent permissionName={APP_SETTINGS_PERMISSION}>
            <Link href={SETTINGS_URL}>
              <a>
                <Icon type="setting" />
              </a>
            </Link>
          </ProtectedContent>
        </div>
      </div>
    </Header>
  );
};

export default LayoutHeader;
