import React,{Component} from 'react'

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

import TestButton from './TestButton'

import './Nav.css'

function testError(){
  throw 'test error';
  return false
}

class Nav extends Component{
  render() {
    return (
      <div className="nav-wrapper">
        <nav className="nav">
          <button onClick={testError}>Break the world</button>

          <NavTop />
          <NavMiddle />
          <NavBottom />
        </nav>
      </div>
    )
  }
}

export default Nav
