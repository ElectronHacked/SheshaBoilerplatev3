import React, { ReactNode, Fragment, useState } from 'react';
import { Layout, Icon, Tooltip } from 'antd';
import Head from './head';
import { useRouter } from 'next/router';
import { appRoutes } from 'routes';
import { IDispatchable } from 'models';
import LayoutHeader from './layoutHeader';
import './styles.scss';
import { LayoutSideMenu } from 'components';
import { useGlobal } from 'providers';
import { useAuth } from 'providers/auth';

const { Sider, Content } = Layout;

interface IProps extends React.HTMLAttributes<any>, IDispatchable {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
  readonly headerControls?: ReactNode;
  readonly toolbar?: ReactNode;
  readonly showHeading?: boolean;
}

const MainLayout: React.FC<IProps> = ({
  title,
  description,
  ogImage,
  url,
  children,
  className,
  headerControls,
  toolbar,
  showHeading = true,
}) => {
  const { isHeaderShown } = useGlobal();
  const { asPath } = useRouter();
  const { loginInfo } = useAuth();
  const grantedPermissions = loginInfo?.user?.grantedPermissions || [];
  const availableAppRoutes = appRoutes.filter(
    i => !Boolean(i.permissionName) || grantedPermissions.indexOf(i.permissionName) > -1
  );

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`layout-container ${isHeaderShown ? '' : 'header-collapsed'}`}>
      <Head title={title} description={description} ogImage={ogImage} url={url} />
      <LayoutHeader />
      <Layout className="layout">
        <Sider theme="light" trigger={null} collapsible collapsed={isCollapsed}>
          <div className={`sidebar-toggle ${isCollapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
            <Tooltip title={`${isCollapsed ? 'Expand' : 'Collapse'} sidebar`} placement="right">
              <a className="toggle">
                <Icon type={isCollapsed ? 'double-right' : 'double-left'} />
              </a>
            </Tooltip>
          </div>
          <LayoutSideMenu links={availableAppRoutes} isCollapsed={isCollapsed} />

          <div className="creator-logo">
            <img src="/static/images/creator_logo.png" alt="Creator" />
          </div>
        </Sider>

        <Content>
          {showHeading && (
            <Fragment>
              <div className="content-heading">
                <h1 className="heading">{title}</h1>

                {headerControls && <div className="header-controls">{headerControls}</div>}
              </div>
            </Fragment>
          )}

          {toolbar && (
            <Fragment>
              <div className="content-toolbar">{toolbar}</div>
            </Fragment>
          )}

          <div
            className={`content-body ${className || ''} ${
              ['/', '/#'].includes(asPath) ? 'content-body-no-padding' : ''
            }`.trim()}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
