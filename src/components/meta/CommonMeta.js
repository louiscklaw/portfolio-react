import React from 'react';
import MetaTags from 'react-meta-tags';

class CommonMeta extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <meta name="description" content="louiscklaw portfolio" />
            <meta name="keywords" content="louiscklaw portfolio" />
            <meta name="author" content="https://louiscklaw.github.io" />
            <meta name="geo.region" content="HK" />

            {/* misc */}
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="1 days" />
            <meta name="theme-color" content="#300130" />
          </MetaTags>
        </div>
      )
  }
}

export default CommonMeta