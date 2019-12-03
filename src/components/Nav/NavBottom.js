import React from 'react';

import {Link} from 'react-router-dom'

import './NavBottom.scss'

export default () => (
  <div className="nav-bottom">
    <div className="social-links-container">
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/louiscklaw" target="_blank" rel="noopener noreferrer">
            <i  className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/louiscklaw" target="_blank" rel="noopener noreferrer">
            <i  className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://keybase.io/louiscklaw" target="_blank" rel="noopener noreferrer"><i
               className="fab fa-keybase"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/louiscklaw" target="_blank" rel="noopener noreferrer"><i
               className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://louislabs.slack.com" target="_blank" rel="noopener noreferrer"><i
               className="fab fa-slack"></i></a>
        </li>
        <li>
          <a href="https://t.me/louislabs" target="_blank" rel="noopener noreferrer"><i  className="fab fa-telegram"></i></a>
        </li>
      </ul>
    </div>
    <div className="build-status">
      <a href="//travis-ci.org/louiscklaw/portfolio-react" target="_blank" rel="noopener noreferrer">
        <img src="https://travis-ci.org/louiscklaw/portfolio-react.svg?branch=master" alt="" srcSet="" />
      </a>
    </div>
    <div className="source-code-link">
        <a href="//github.com/louiscklaw/portfolio-react" target="_blank" rel="noopener noreferrer">
          source code
          <i className="fas fa-external-link-alt"></i>
        </a>
    </div>

    <div className="credit-container">
      <span role="img" aria-label="heart">❤️</span> coded by louiscklaw.<br />
      Built on the solder of <br />
      <Link to="/credits"> THESE GIANTS</Link>


    </div>
  </div>
)