import React from 'react';

// import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import GithubLink from '../../components/Links/GithubLink'
// import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';
import './HkoWeatherBot.css'


class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="HKO weather bot" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div style={{maxWidth: "30%" }}>
              <img src="/assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg"  alt="" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>to build a opensource 3d printer named voron</p>

            <h3 className="topic">ref/repo:</h3>
            <GithubLink link="https://github.com/louiscklaw/hko-weather-parser" />
            <GithubLink link="https://github.com/louiscklaw/hko-weather-slackbot" />

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription