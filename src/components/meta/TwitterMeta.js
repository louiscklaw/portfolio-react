import React from 'react';
import MetaTags from 'react-meta-tags';

class TwitterMeta extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            {/* twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content="@louislabs" />
            <meta property="twitter:title" content="louis portfolio" />
            <meta property="twitter:description" content="louiscklaw portfolio" />
            <meta property="twitter:creator" content="@louislabs" />
            <meta property="twitter:image" content="img/avatar.jpeg" />
            <meta property="twitter:domain" content="louiscklaw.github.io" />
          </MetaTags>
        </div>
      )
  }
}

export default TwitterMeta