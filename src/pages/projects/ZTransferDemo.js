import React from 'react';

import MetaTitle from '../../components/MetaTitle'
import MetaProjectDetail from '../../components/meta/ProjectDetail'

import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

// import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';
import './VoronTryout.css'

// prepare site content
import head_pic from '../../assets/projects/z-transfer-demo/transfer-sh.png';
let page_title = 'z transfer demo';


class ProjectDescription extends React.Component{
  render(){
    return (
      <>
        <MetaProjectDetail />
        <MetaTitle text={page_title} />
        <div className="desc-container">
          <div className="project-description">
            <BackToProjects />

            <ProjectTitle project_title={page_title} />

            <div className="desc-header-picture" style={{display:"flex"}}>
              <div>
                <img src={head_pic} alt="" />
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
      </>
    )
  }
}

export default ProjectDescription