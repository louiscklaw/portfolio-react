import React from 'react';
import ReactDOM from 'react-dom';

import GistLink from '../../components/Links/GistLink';

it('renders helloworld call for gist without crashing', () => {
  const div = document.createElement('div');
  let gist_link = <GistLink gist_id="louiscklaw/6a0206c038bbe82a969c1b7677713fb3" />;

  ReactDOM.render(gist_link, div);
  ReactDOM.unmountComponentAtNode(div);
});
