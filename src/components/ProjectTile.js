import React from 'react';
import {Link} from 'react-router-dom'

import './ProjectTile.css'

export default (props) => (
    <div className="project-tile">
      <p>{props.project_name}</p>
      <Link to="/project_detail/project1">to project detail</Link>
    </div>
)