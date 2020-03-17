import React, { useState } from 'react';
import './styles.scss';
// import { withAuth } from 'hocs';
import { Collapse, Icon, Button } from 'antd';
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
import { MainLayout } from 'components/layouts';
import { useGlobal } from 'providers';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Home = () => {
  const [expandIconPosition] = useState<ExpandIconPosition>('right');
  const { fetchPosts, fetchPostsSuccess, isInProgress } = useGlobal();

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
      <Button onClick={fetchPosts} type="primary" loading={isInProgress.fetchPosts}>
        Fetch Posts
      </Button>
      <Button onClick={fetchPostsSuccess} type="danger" disabled={!isInProgress.fetchPosts}>
        Cancel Fetch Posts Request
      </Button>
      <br />
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
      </div>
    </MainLayout>
  );
};

// export default withAuth(Home);
export default Home;
