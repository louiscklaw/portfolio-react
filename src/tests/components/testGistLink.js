import React from 'react';
import ReactDOM from 'react-dom';

import GistLink from '../../components/Links/GistLink';

it('renders helloworld call for gist without crashing', () => {
  const div = document.createElement('div');

  let gist_link = <GistLink />;

  ReactDOM.render(gist_link, div);
  ReactDOM.unmountComponentAtNode(div);
});
