import React from 'react';
import {Link} from 'react-router-dom'

import './ProjectTile.css'

export default ({proj_image, proj_name, proj_link}) => {
  return (
    <div className="project-tile">
      <Link to={proj_link} >

        <div style={{backgroundImage: `url(${proj_image})`}} className="tile-bg"></div>
        <p>{proj_name}</p>

      </Link>
    </div>
  )
}