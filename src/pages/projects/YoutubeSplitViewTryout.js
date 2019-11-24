import React from 'react';

import MetaTitle from '../../components/MetaTitle'

import NewWindowLink from '../../components/Links/NewWindowLink'
import GithubLink from '../../components/Links/GithubLink'

import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'

import MetaProjectDetail from '../../components/meta/ProjectDetail'

import './ProjectDescription.css';
import './YoutubeSplitViewTryout.css'

import test_image from '../../assets/projects/youtube-split-view-tryout/youtube_split_view_tryout.png';

class ProjectDescription extends React.Component{
  render(){
    return (
      <>
        <MetaProjectDetail />
        <MetaTitle text="youtube split view" />

        <div className="desc-container">
          <div className="project-description">
            <BackToProjects />

            <ProjectTitle project_title="youtube split view tryout" />

            <div className="desc-header-picture" style={{display:"flex"}}>
              <div>
                <img src={test_image} alt="" />
              </div>
              <div style={{maxWidth: "30%" }}>
                <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
              </div>
            </div>

            <div className="desc-body">
              <h3 className="topic">Purpose</h3>
              <p>a simple page to monitor stock, while data provided by tradingview</p>

              <h3 className="topic">Demo</h3>
              <NewWindowLink link="https://louiscklaw.github.io/youtube-split-view-tryout/" />

              <h3 className="topic">ref/repo:</h3>
              <GithubLink link="https://github.com/louiscklaw/youtube-split-view-tryout" />

            </div>
          </div>
        </div>
      </>

    )
  }
}

export default ProjectDescription