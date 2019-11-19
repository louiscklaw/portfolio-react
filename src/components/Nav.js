import React from 'react'

import {Link} from 'react-router-dom'

export default () => (
  <nav>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/projects">projects</Link></li>
      <li><Link to="/logs">logs</Link></li>
      <li><Link to="/contact">contact</Link></li>
      <li><Link to="/helloworld">helloworld</Link></li>
    </ul>
  </nav>
)