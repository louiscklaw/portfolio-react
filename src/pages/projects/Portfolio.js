import React from 'react';

import NewWindowLink from '../../components/Links/NewWindowLink'
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

          <ProjectTitle project_title="portfolio" />

          <div className="desc-header-picture" style={{display:"flex"}}>
          </div>

          <div className="desc-body">
            <h3 className="topic">made by react</h3>
            <p className="desc"> a react portfolio</p>


            <h3 className="topic">log:</h3>
            <ul>
              <li>pug portfolio</li>
              <li>wordpress portfolio</li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default ProjectDescription