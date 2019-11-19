import React from 'react';

// eslint-disable-next-line
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'


import './App.css';

import Nav from './components/Nav'


import SwitchRoute from './routes/SwitchRoute'

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
