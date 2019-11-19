import React from 'react';
import {Link} from 'react-router-dom'

import './ProjectTile.css'

export default (props) => (
    <div className="project-tile"
      style={{backgroundImage: `url(${props.proj_image})`}}>
      <p>{props.project_name}</p>
      <Link to="/project_detail/project1">to project detail</Link>
    </div>
)