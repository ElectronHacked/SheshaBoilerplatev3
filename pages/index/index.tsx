import React, { useState } from 'react';
import './styles.scss';
import { withAuth } from 'hocs';
import { Collapse, Icon, Select } from 'antd';
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
import { MainLayout } from 'components/layouts';

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Home = () => {
  const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('right');
  const genExtra = () => {
    if (expandIconPosition) {
      return null;
    }
    return (
      <Icon
        type="setting"
        onClick={event => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
    );
  };

  return (
    <MainLayout title="Home" description="This is the home page">
      <div className="home-page">
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
          className="collapsible-sha-panel"
        >
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
        </Collapse>
                      <br />
        <span>Expand Icon Position: </span>
        <Select value={expandIconPosition} onChange={setExpandIconPosition}>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </div>
    </MainLayout>
  );
};

export default withAuth(Home);
