import React from 'react';

import GithubLink from '../../components/Links/GithubLink'

import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';
import './OpencvCarCounting.css'

import head_pic from '../../assets/projects/opencv-car-counting/opencv-car-counting.jpg'

class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="voron 3d printer" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div>
              <img src={hea_pic}  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/8P3VEGvMeTQ" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose / description</h3>
            <p>To count the number of cars passing by images only. This project is craeted on top of the another github works work.</p>

            <h3 className="topic">Requirements:</h3>
            <ul>
              <li>python</li>
              <li>docker</li>
              <li>linux</li>
            </ul>

            <h3 className="topic">repository:</h3>
            <GithubLink link="https://github.com/louiscklaw/car_tracking_tryout" />

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription