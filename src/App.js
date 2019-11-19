import React from 'react';

// eslint-disable-next-line
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'

import './App.css';

import Nav from './components/Nav'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects.js'
import Logs from './pages/Logs.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/projects" component={Projects} />
          <Route path="/logs" component={Logs} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
