import React from 'react';
// import ReactDOM from 'react-dom';

import { hydrate, render } from "react-dom";

import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import DevConfig from './config/dev.config'
import ProdConfig from './config/prod.config'

const CHECK_DEV_ENV = () => {
  let check_result = process.env.NODE_ENV === 'development';
  if(check_result){
    console.warn("check running environment.")
  }
  return check_result;
}

const ACTIVE_CONFIG = (CHECK_DEV_ENV() === 'development' ? DevConfig: ProdConfig)

if (CHECK_DEV_ENV()){
  console.warn("checked development environment, skipping init sentry...")
}else{
  Sentry.init({dsn: ACTIVE_CONFIG.SentryDSN});
}



ReactGA.initialize(ACTIVE_CONFIG.GAKey);
ReactGA.pageview(window.location.pathname + window.location.search);

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
