import React from 'react';

import {BrowserRouter} from 'react-router-dom'

import ReactDOM from 'react-dom';

import {BackToProjects} from '../../components/index'

it('renders helloworld call for BackToProjects button without crashing', () => {
  const div = document.createElement('div');
  let back_button = <BrowserRouter><BackToProjects /></BrowserRouter> ;

  ReactDOM.render(back_button, div);
  ReactDOM.unmountComponentAtNode(div);
});
