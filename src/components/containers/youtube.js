import React from 'react';

import './youtube.css'

export default ({src}) => {
  return (
    <div className="test-container">
      <div className="video-container">
        <iframe
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

    </div>
  )
}