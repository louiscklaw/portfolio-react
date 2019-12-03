import React from 'react';
import ReactDOM from 'react-dom';

import MetaTitle from '../../components/MetaTitle/MetaTitle'

it('renders helloworld call for MetaTitle without crashing', () => {
  const div = document.createElement('div');
  let project_tile_comp = <MetaTitle />;

  ReactDOM.render(project_tile_comp, div);
  ReactDOM.unmountComponentAtNode(div);
});
