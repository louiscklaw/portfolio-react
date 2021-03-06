import React,{Component} from 'react'

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

import './Nav.css'

class Nav extends Component{
  render() {
    return (
      <div className="nav-wrapper">
        <nav className="nav">
          <NavTop />
          <NavMiddle />
          <NavBottom />
        </nav>
      </div>
    )
  }
}

export default Nav
