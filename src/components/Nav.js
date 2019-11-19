import React from 'react'

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

import './Nav.css'

export default () => (
  <div className="nav-wrapper">
    <nav className="nav">
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </nav>
  </div>
)