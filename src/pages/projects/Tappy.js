import React from 'react';

// import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';
import './VoronTryout.css'


class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="tappy" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div >
              <img src="/assets/projects/tappy/20170724_121632-e1500887947112.jpg"  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <h3 className="topic">currently working on this project</h3>

        </div>
      </div>
    )
  }
}

export default ProjectDescription