import React from 'react';
import './ProjectDescription.css'

import NewWindowLink from './NewWindowLink'

class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="project-description-container">
        <img
          src="https://raw.githubusercontent.com/louiscklaw/tradingview-tile-tryout/master/src/img/sc.png"
          alt="" srcSet=""
        />

        <div className="project-description-body">
          <h3 className="topic">Purpose</h3>
          <p>a simple page to monitor stock, while data provided by tradingview</p>

          <h3 className="topic">Demo</h3>
          <NewWindowLink link="https://louiscklaw.github.io/tradingview-tile-tryout" />

          <h3 className="topic">ref/repo:</h3>
          <NewWindowLink link="https://github.com/louiscklaw/tradingview-tile-tryout" />

        </div>
      </div>
    )
  }
}

export default ProjectDescription