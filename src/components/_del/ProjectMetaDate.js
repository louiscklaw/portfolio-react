import React, {Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ProjectMetaDate.css'

export default ({meta_date}) => {

  return (
    <div className="project-meta-date">
      <FontAwesomeIcon icon={['far', 'calendar' ]} />{meta_date}
    </div>
  )
}