import { FC } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export interface IPanelProps {
  isActive?: boolean;
  header?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  disabled?: boolean;
  extra?: React.ReactNode;
}

export const CollapsiblePanel: FC<IPanelProps> = model => {
  return (
    <Collapse expandIconPosition="right" defaultActiveKey="1">
      <Panel header={model.header} extra={model.extra} key="1">
        {model.children}
      </Panel>
    </Collapse>
  );
};

export default CollapsiblePanel;
