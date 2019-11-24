import React from 'react';

// import NewWindowLink from '../../components/Links/NewWindowLink'
import GithubLink from '../../components/Links/GithubLink'

import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'

import './ProjectDescription.css';
import './Slic3rBatchExport.css'

import head_pic from '../../assets/projects/slic3r-batch-export/slic3r-batch-export.png'

class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="slic3r batch export" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div>
              <img src={head_pic}  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>An easy tool to export gcode from slic3r.</p>

            <h3 className="topic">background</h3>
            <p>The option of slic3r command linx options wasn’t availabe under linux as described. The tools written to help perorming export 3mf -> save to stl -> export gcode as a batch operation.</p>

            <h3 className="topic">How to use:</h3>
            <ul>
              <li>Clone repo</li>
              <li>run under linux</li>
              <li>git clone git@github.com:louiscklaw/slic3r_batch_export.git</li>
              <li>pip install libxdo</li>
              <li>update the file list in:</li>
            </ul>

            <ul>
              <li>file_3mf_list # for the list of 3mf files</li>
              <li>WORKSPACE_DIR and PROJ_HOME</li>
              <li>SLIC3R_ACTIVE_CONFIG for slic3r configuration wanted</li>
              <li>SLIC3R_BIN_PATH for slic3r binary</li>
            </ul>

            <ul>
              <li>python batch_slic3r.py</li>
            </ul>

            <h3 className="topic">Source</h3>
              <GithubLink link="https://github.com/louiscklaw/slic3r_batch_export"/>

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription