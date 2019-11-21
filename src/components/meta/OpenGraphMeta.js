import React from 'react';
import MetaTags from 'react-meta-tags';

class OpenGraphMeta extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            {/* open-graph */}
            <meta property="og:title" content="louiscklaw portfolio" />
            <meta property="og:description" content="portfolio of louiscklaw" />
            <meta property="og:url" content="https://louiscklaw.github.io/portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="img/avatar.jpeg" />
            <meta property="og:locale" content="en" />
          </MetaTags>
        </div>
      )
  }
}

export default OpenGraphMeta