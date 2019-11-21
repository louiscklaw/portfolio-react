import React from 'react';
import {Link} from 'react-router-dom'

import './NavMiddle.css';

export default () => (
  <div className="nav-middle">
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/projects">projects</Link>
      </li>
      <li>
        <Link to="/logs">logs</Link>
      </li>
      {/* <li>
        <Link to="/contact">contact</Link>
      </li> */}
      {/* <li>
        <Link to="/hello/helloworld">helloworld</Link>
      </li> */}
      <li>
        <Link to="/about">about</Link>
      </li>
    </ul>
  </div>
)