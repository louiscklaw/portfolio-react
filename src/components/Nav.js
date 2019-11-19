import React from 'react'

import {Link} from 'react-router-dom'

export default () => (
  <nav>
    <p>test nav</p>
    <Link to="/">home</Link>
    <Link to="/projects">projects</Link>
    <Link to="/logs">logs</Link>
    <Link to="/contact">contact</Link>
  </nav>
)