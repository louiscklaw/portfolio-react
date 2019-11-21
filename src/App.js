import React from 'react';

// eslint-disable-next-line
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import './App.css';

import Nav from './components/Nav'

import SwitchRoute from './routes/SwitchRoute'

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas, far)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="content">
          <SwitchRoute />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
