import React from 'react';

import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'
import GithubLink from '../../components/Links/GithubLink'

import './ProjectDescription.css';
import './VoronTryout.css'


class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="linux toolbox" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div style={{maxWidth: "30%" }}>
              <img src="/assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg"  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>ack, entr, inotify-tools</p>

            <h3 className="topic">Demo</h3>
            <NewWindowLink link="https://louiscklaw.github.io/tradingview-tile-tryout" />

            <h3 className="topic">ref/repo:</h3>
            <GithubLink link="git@bitbucket.org:louiscklaw/linux_postinstall.git" />
            <GithubLink link="https://github.com/louiscklaw/archlinux_postinstall.git" />

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription