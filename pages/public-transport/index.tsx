import React from 'react';
import Layout from 'components/layouts/main/index';
import './styles.scss';

export default function PublicTransport() {
  function handleRouteAdd() {
    window.location.href = 'public-transport/addpost';
  }

  function handleRouteShow() {
    window.location.href = 'public-transport/showpost';
  }
  return (
    <Layout title="PublicTransport" description="This is the PublicTransport Page">
      <div className="public-transport-page">
        <p className="writing">
          This is the <strong>PublicTransport</strong> page
        </p>
        <hr />
        <p className="writing2">
          Click below to add a <strong>Post</strong>:
        </p>
        <button type="button" className="btn" onClick={handleRouteAdd}>
          Add a Post
        </button>
        <br /> <br /> <br />
        <p className="writing2">
          Click below to view <strong>Posts</strong>:
        </p>
        <button type="button" className="btn" onClick={handleRouteShow}>
          View Posts
        </button>
      </div>
    </Layout>
  );
}
