import React from 'react';
import ReactDOM from 'react-dom';

import YoutubeContainers from '../../components/containers/youtube';

it('renders youtube without crashing', () => {
  const div = document.createElement('div');

  let youtube = <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />

  ReactDOM.render(youtube, div);
  ReactDOM.unmountComponentAtNode(div);
});
