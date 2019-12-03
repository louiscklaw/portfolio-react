import React from 'react';
import MetaTags from 'react-meta-tags';

class MetaContact extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>hello contact</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
        </div>
      )
  }
}

export default MetaContact