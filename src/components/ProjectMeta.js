import React from 'react';
import './ProjectMeta.css'

class ProjectMeta extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.project_meta}</p>
      </div>
    )
  }
}

export default ProjectMeta