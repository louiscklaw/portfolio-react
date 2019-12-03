import React from 'react';
import ReactDOM from 'react-dom';

// import GistLink from '../../components/Links/GistLink';
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle'


it('renders helloworld call for ProjectTitle without crashing', () => {
  const div = document.createElement('div');
  let gist_link = <ProjectTitle />;

  ReactDOM.render(gist_link, div);
  ReactDOM.unmountComponentAtNode(div);
});
