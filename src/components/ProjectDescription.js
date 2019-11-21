import React from 'react';
import './ProjectDescription.css'

class ProjectDescription extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.project_description}</p>
      </div>
    )
  }
}

export default ProjectDescription