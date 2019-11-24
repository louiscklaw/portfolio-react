import React from 'react';

import './NavBottom.css'

export default () => (
  <div className="nav-bottom">
    <a href="https://travis-ci.org/louiscklaw/portfolio-react" target="_blank" rel="noopener noreferrer">
      <img src="https://travis-ci.org/louiscklaw/portfolio-react.svg?branch=master" alt="" srcSet=""/>
    </a>
    <div className="source-link">
      <p>
        <a href="https://github.com/louiscklaw/portfolio-react" target="_blank" rel="noopener noreferrer">
          source code here
          <i className="fas fa-external-link-alt"></i>
        </a>
      </p>
    </div>
  </div>
)