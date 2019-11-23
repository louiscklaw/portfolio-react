import React from 'react';

import NewWindowLink from '../../components/Links/NewWindowLink'
import BackToProjects from '../../components/Links/BackToProjects'
import ProjectTitle from '../../components/ProjectTitle'

import YoutubeContainers from '../../components/containers/youtube'
import SourceCode from '../../components/containers/source-code'


import './ProjectDescription.css';
import './AppiumBehaveNotes.css'

let execute_script=
`$ virtualenv venv
$ source venv/bin/activate`


class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="appium behave tryout" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div style={{maxWidth: "30%" }}>
              <img src="/assets/appium-behave/appium-behave.png"  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>to test mobile apps of hk observatory</p>

            <h3 className="topic">Environment</h3>
            <ul>
              <li>linux</li>
              <li>appium</li>
              <li>python 3.6.1, behave, python-appium-client</li>
            </ul>

            <h3 className="topic">To setup</h3>
            <SourceCode lang="shell" >
              $ pip install -r requirements.txt
            </SourceCode>

            <h3 className="topic">to execute</h3>
            <h4 className="topic">activate virtual environment</h4>
            <SourceCode lang="shell" >
              {execute_script}
            </SourceCode>

            <h4 className="sub-topic">install python libraries</h4>
            <SourceCode lang="shell" >
              {`$ pip install -r requirements.txt`}
            </SourceCode>

            <h4 className="sub-topic">start appium -> connect to android / genymotion appium</h4>
            <SourceCode lang="shell" >{
`$ python behave
$ behave ./features/HKOApp_9DayForecast.feature`
}
            </SourceCode>


            <h3 className="topic">Demo</h3>
            <h4 className="sub-topic">passing example</h4>
            <YoutubeContainers src="https://www.youtube.com/embed/Ce-v1zTHhwU" />

            <h4 className="sub-topic">failing example</h4>
            <YoutubeContainers src="https://www.youtube.com/embed/uR8VLSwvf9Q" />

            <h3 className="topic">system structure</h3>
            <h3 className="topic">Behave grammer</h3>
            <h3 className="topic">stack on MAC machine:</h3>


            <h3 className="topic">ref/repo:</h3>
            <NewWindowLink link="https://www.reddit.com/r/voroncorexy/" />

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDescription