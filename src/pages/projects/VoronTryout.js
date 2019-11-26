import React from 'react';

import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';
import './VoronTryout.css'

import head_pic from '../../assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg'

class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="voron 3d printer" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div style={{maxWidth: "30%" }}>
              <img src={head_pic}  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>to build a opensource 3d printer named voron</p>

            <h3 className="topic">Demo</h3>
            <NewWindowLink link="https://louiscklaw.github.io/tradingview-tile-tryout" />

            <h3 className="topic">ref/repo:</h3>
            <NewWindowLink link="https://www.reddit.com/r/voroncorexy/" />

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription