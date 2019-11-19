import React from 'react';
import MetaTags from 'react-meta-tags';

import CommonMeta from './CommonMeta'
import OpenGraphMeta from './OpenGraphMeta'
import TwitterMeta from './TwitterMeta'

class HelloWorldMeta extends React.Component {
  render() {
    console.log(this.props.project_name);
    return (
        <div className="wrapper">
          <MetaTags>
            <title>{this.props.project_name + ' details'} </title>
          </MetaTags>
          <CommonMeta />
          <OpenGraphMeta />
          <TwitterMeta />
        </div>
      )
  }
}

export default HelloWorldMeta