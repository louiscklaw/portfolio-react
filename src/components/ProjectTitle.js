import React from 'react';

import './ProjectTitle.css';


class ProjectTitle extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.project_title}</h3>
      </div>
    )
  }
}

export default ProjectTitle