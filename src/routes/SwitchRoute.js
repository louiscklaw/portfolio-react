import React from 'react';
import {Switch, Route} from 'react-router-dom'

// import Home from '../pages/Home/Home'
import {
  Contact,
  Projects,
  Logs,
  About,
  Credits,
  NotFound
} from '../pages/index'

import RoutesProjectDetail from './ProjectDetail'

import RoutesHelloworld from './Helloworld'
// import Helloworld from '../pages/Helloworld'

export default () => (
  <Switch>
    <Route exact path="/" component={Projects} />
    <Route path="/projects" component={Projects} />
    <Route path="/logs" component={Logs} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/credits" component={Credits} />

    <Route path="/hello" component={RoutesHelloworld} />
    <Route path="/project_detail" component={RoutesProjectDetail} />

    {/* <RoutesProjectDetail /> */}?

    {/* drop to not found if no match */}
    <Route path="*" component={NotFound} />
  </Switch>
)