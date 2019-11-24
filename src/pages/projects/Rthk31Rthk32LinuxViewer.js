import React from 'react';

import NewWindowLink from '../../components/Links/NewWindowLink'
import GistLink from '../../components/Links/GistLink'

import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

// import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';
import './VoronTryout.css'

import head_pic from '../../assets/projects/rthk31-rthk32-linux-viewer/rthk31-rthk32-linux-viewer.png'

// let page_title = 'rthk31 rthk32 linux viewer'


class ProjectDescription extends React.Component{
  render(){
    return (
      <>
        <div className="desc-container">
          <div className="project-description">
            <BackToProjects />

            <ProjectTitle project_title="voron 3d printer" />

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

              <h3 className="topic">What is this ?</h3>
              <p>To connect to the world while you’re working in linux environment at home……Inspired by Linux桌面環境下收看ViuTV</p>

              <h3 className="topic">Requirement:</h3>
              <ul>
                <li>linux, gnome</li>
                <li>python3, curl, gnome-mpv</li>
              </ul>

              <h3 className="topic">How to install:</h3>
              <ul>
                <li>install pwgen pip3 install pwgen</li>
                <li>open ~/.bashrc or ~/.zshrc</li>
                <li>paste the following source into it</li>
                <li>logout from linux -> login</li>
                <li>done</li>
              </ul>

              <h3 className="topic">Source</h3>
              <GistLink test="https://gist.github.com/louiscklaw/f9a49076aff09449a5e5e0078b30ce65"/>

            </div>
          </div>
        </div>
      </>

    )
  }
}

export default ProjectDescription