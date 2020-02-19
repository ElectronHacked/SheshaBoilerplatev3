import React, { FC } from 'react';
import './styles.scss';
import { INavLink } from 'models';
import { Menu, Icon } from 'antd';
import uuid from 'uuid/v4';
import { useRouter } from 'next/router';
import { DASHBOARD_PAGE_URL } from 'routes';
import Link from 'next/link';

const activeClass = 'ant-menu-item-selected';
const submenuClass = 'ant-menu-item-is-summebu';

const { SubMenu } = Menu;

interface IProps {
  links: INavLink[];
  isCollapsed?: boolean;
}

export const LayoutSideMenu: FC<IProps> = ({ links/*, isCollapsed*/ }) => {
  const { asPath } = useRouter();

  if ((links ?? []).length == 0)
    return null;

  // @ts-ignore
  const currentPath =
    asPath === DASHBOARD_PAGE_URL ? asPath : asPath.endsWith('/') ? asPath.substr(0, asPath.length - 1) : asPath;

  const renderMenuItem = (route: INavLink, isSubMenu?: boolean) => {
    const { icon, linkTo, displayName, children } = route;

    if (children) {
      return (
        <SubMenu
          key={uuid()}
          className="is-ant-menu-item"
          title={
            <span>
              {icon && <Icon type={icon} />}
              <span>
                <a className="nav-links-renderer" href={linkTo}>
                  {displayName}
                </a>
              </span>
            </span>
          }
        >
          {children.map(child => renderMenuItem(child, true))}
        </SubMenu>
      );
    }

    const isActiveClass = currentPath === linkTo ? activeClass : '';
    const isSubmenuClass = isSubMenu ? submenuClass : '';

    const classNames = `${isActiveClass} ${isSubmenuClass}`.trim();

    return (
      <Menu.Item key={uuid()} className={classNames} title={displayName}>
        <Link href={linkTo} as={linkTo} passHref={true}>
          <a>
            {icon && <Icon type={icon} />}
            <span>{displayName}</span>
          </a>
        </Link>
      </Menu.Item>
    );
  };
  return (
    <Menu mode="inline" defaultSelectedKeys={[links[0].name]} className="nav-links-renderer">
      {links.map(link => renderMenuItem(link))}
    </Menu>
  );
};

export default LayoutSideMenu;
