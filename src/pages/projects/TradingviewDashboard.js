import React from 'react';

import ProjectTitle from '../../components/ProjectTitle'
import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'

import './ProjectDescription.css';
import './TradingviewDashboard.css';


class ProjectDescription extends React.Component{
  render(){
    return (

      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="tradingview dashboard" />

          <div className="desc-header-picture" >
            <img src="/assets/proj_thumbnails/tradingview-dashboard.png" alt="" />
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>a simple page to monitor stock, while data provided by tradingview</p>

            <h3 className="topic">Demo</h3>
            <NewWindowLink link="https://louiscklaw.github.io/tradingview-tile-tryout" />

            <h3 className="topic">ref/repo:</h3>
            <NewWindowLink link="https://github.com/louiscklaw/tradingview-tile-tryout" />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription