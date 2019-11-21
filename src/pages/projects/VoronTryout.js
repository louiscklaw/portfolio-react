import React from 'react';

import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import './ProjectDescription.css';
import './VoronTryout.css'


class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="voron 3d printer" />

          <div className="desc-header-picture">
            <img src="/assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg" style={{width: "30%" }} alt="" />
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