import React from 'react';

import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Logs from '../pages/Logs'
import About from '../pages/About'

import RoutesProjectDetail from './ProjectDetail'

import RoutesHelloworld from './Helloworld'
// import Helloworld from '../pages/Helloworld'

import NotFound from '../pages/NotFound'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/logs" component={Logs} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />

    <Route path="/hello" component={RoutesHelloworld} />
    <Route path="/project_detail" component={RoutesProjectDetail} />

    {/* <RoutesProjectDetail /> */}?

    {/* drop to not found if no match */}
    <Route path="*" component={NotFound} />
  </Switch>
)