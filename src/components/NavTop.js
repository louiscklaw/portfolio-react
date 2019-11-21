import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './NavTop.css'

const element = <FontAwesomeIcon icon={faCoffee} />

export default () => (
  <div className="nav-top">
    top
    {element}

  </div>
)