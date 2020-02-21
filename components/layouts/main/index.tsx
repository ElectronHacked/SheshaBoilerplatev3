import React from 'react';
import uuid from 'uuid/v4';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import Head from './head';
// import {CustomNProgress} from 'components';
import { compose } from 'recompose';
import '../../../styles/main.scss';
import { withRouter, RouterProps } from 'next/router';

const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
  readonly router?: RouterProps;
}

const activeClass = 'ant-menu-item-selected';

const MainLayout: React.SFC<Props> = ({ title, description, ogImage, url, router, children }) => {
  const { asPath } = router;

  return (
    <>
      {/* <CustomNProgress /> */}
      <Head title={`TransportWise | ${title}`} description={description} ogImage={ogImage} url={url} />
      <Layout className="layout">
        <div className="header">TransportWise</div>
        <div className="header2">Thee actual blog</div>
        <Header>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <MenuItem key={uuid()} className={asPath === '/fuel-wise' ? activeClass : ''}>
              <Link href="/fuel-wise">
                <a>FuelWise</a>
              </Link>
            </MenuItem>

            <MenuItem key={uuid()} className={asPath === '/public-transport' ? activeClass : ''}>
              <Link href="/public-transport">
                <a>PublicTransport</a>
              </Link>
            </MenuItem>

            <MenuItem key={uuid()} className={asPath === '/about' ? activeClass : ''}>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </MenuItem>

            {/* new-menu-item */}
          </Menu>
        </Header>
        <hr />
        <hr />
        <Content>
          <div className="content-body">{children}</div>
        </Content>
        <Footer>projectone @{new Date().getFullYear()} Created by</Footer>
      </Layout>
    </>
  );
};

export default compose<Props, Props>(withRouter)(MainLayout);
