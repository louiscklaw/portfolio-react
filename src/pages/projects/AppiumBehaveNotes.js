import React from 'react';

import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';

import './AppiumBehaveNotes.css'


class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="appium behave tryout" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div style={{maxWidth: "30%" }}>
              <img src="/assets/appium-behave/appium-behave.png"  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>to test mobile apps of hk observatory</p>

            <h3 className="topic">Environment</h3>
            <ul>
              <li>linux</li>
              <li>appium</li>
              <li>python 3.6.1, behave, python-appium-client</li>
            </ul>

            <h3 className="topic">To setup</h3>
            <ul>
              <li>linux</li>
              <li>appium</li>
              <li>python 3.6.1, behave, python-appium-client</li>
            </ul>




            <h3 className="topic">ref/repo:</h3>
            <NewWindowLink link="https://www.reddit.com/r/voroncorexy/" />

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription