import React from 'react';
import './ProjectMeta.css'

import ProjectMetaDate from './ProjectMetaDate'
import ProjectMetaTags from './ProjectMetaTags'

class ProjectMeta extends React.Component{
  render(){
    return (
      <div className="project-meta-container">
        <div className="project-meta">
          <ProjectMetaDate meta_date={this.props.meta_date}/>
          <ProjectMetaTags meta_tags={this.props.meta_tags} />
        </div>
      </div>
    )
  }
}

export default ProjectMeta