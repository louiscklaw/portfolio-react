import React from 'react';
import ReactDOM from 'react-dom';

import YoutubeContainers from '../components/containers/youtube';
import SourceCode from '../components/containers/source-code';

it('renders youtube without crashing', () => {
  const div = document.createElement('div');

  let youtube = <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />

  ReactDOM.render(youtube, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders react-syntax-highlighter without crashing', () => {
  const div = document.createElement('div');

  let source_code = <SourceCode lang="shell" >{`console.log('helloworld')`}</SourceCode>

  ReactDOM.render(source_code, div);
  ReactDOM.unmountComponentAtNode(div);
});
