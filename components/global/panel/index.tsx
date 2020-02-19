import React, { ReactNode, FC, Fragment, useState, useRef, CSSProperties } from 'react';
import { Icon } from 'antd';
import { HeightProperty } from 'csstype';
import './styles.scss';

interface IProps {
  /**
   * This is the title
   */
  title?: string | ReactNode;
  controls?: ReactNode;
  children: ReactNode;
  className?: string;
  collapsible?: boolean;
  hasBorderTop?: boolean;
  style?: CSSProperties;
}

export const Panel: FC<IProps> = ({
  title,
  controls,
  children,
  className = '',
  collapsible = true,
  hasBorderTop = true,
  style,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [, setShouldHandleHeight] = useState<HeightProperty<any>>('unset');

  const bodyRef = useRef(null);

  /**
   * In order for the panel's `height  to transiition properly, the max-height value has to be static. so, the way
   * to know what is the value, is to get it from itself and set it to itself - a hack, if you think about it
   */
  const handleCollapse = () => {
    if (collapsed) {
      setTimeout(() => {
        setShouldHandleHeight(true);
      }, 300); // 300ms is our global transition time
    } else {
      setShouldHandleHeight(false);
    }

    setCollapsed(!collapsed);
  };

  return (
    <div className={`sha-panel ${className} ${hasBorderTop ? 'has-border-top' : ''}`} style={style}>
      <div className="sha-panel-header">
        {title && <h3 className="sha-title">{title}</h3>}
        <div className="sha-controls">
          <Fragment>
            {controls}{' '}
            {collapsible && (
              <span className="panel-collapse" onClick={handleCollapse}>
                <Icon type="up" className={collapsed ? ' collapsed' : ''} />
              </span>
            )}
          </Fragment>
        </div>
      </div>
      <div className={`sha-panel-body${collapsed ? ' collapsed' : ''}`} ref={bodyRef}>
        {children}
      </div>
    </div>
  );
};

export default Panel;
