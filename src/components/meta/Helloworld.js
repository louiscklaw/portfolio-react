import React from 'react';
import MetaTags from 'react-meta-tags';

import CommonMeta from './CommonMeta'
import OpenGraphMeta from './OpenGraphMeta'
import TwitterMeta from './TwitterMeta'

class HelloWorldMeta extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <CommonMeta />
          <OpenGraphMeta />
          <TwitterMeta />
        </div>
      )
  }
}

export default HelloWorldMeta