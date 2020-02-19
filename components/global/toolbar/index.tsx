import React, { FC, useState, useEffect, Fragment } from 'react';
import uuid from 'uuid/v4';
import { Icon } from 'antd';

import IToolbarItem from './toolbarItem';

import './styles.scss';
import { useGlobalActions } from 'providers/global';

interface IProps {
  items: IToolbarItem[];
  isHeaderShown: boolean;
}

export const Toolbar: FC<IProps> = ({ items, isHeaderShown }) => {
  const [headerToggleIcon, setHeaderToggleIcon] = useState<'up' | 'down'>('down');
  const { toggleHeaderVisibility } = useGlobalActions();

  useEffect(() => {
    setHeaderToggleIcon(isHeaderShown ? 'up' : 'down');
  }, [isHeaderShown]);

  const handleToggleHeaderVisibility = () => toggleHeaderVisibility(!isHeaderShown);

  return (
    <div className="index-toolbar" key={uuid()}>
      <div className="index-toolbar-left">
        <Fragment>
          {items.map(({ title, icon, onClick }) => (
            <span onClick={onClick} className="toolbar-item" key={uuid()}>
              <Icon type={icon} />
              {title}
            </span>
          ))}
        </Fragment>
      </div>

      <div className="index-toolbar-right">
        <Fragment>
          <Icon type={headerToggleIcon} onClick={handleToggleHeaderVisibility} />
        </Fragment>
      </div>
    </div>
  );
};

export default Toolbar;
