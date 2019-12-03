import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// import GistLink from '../../components/Links/GistLink';
import ProjectTile from '../../components/ProjectTile/ProjectTile'


it('renders helloworld call for ProjectTile without crashing', () => {
  const div = document.createElement('div');
  let project_tile_comp = <BrowserRouter><ProjectTile proj_link="www.example.com"/></BrowserRouter>;

  ReactDOM.render(project_tile_comp, div);
  ReactDOM.unmountComponentAtNode(div);
});
