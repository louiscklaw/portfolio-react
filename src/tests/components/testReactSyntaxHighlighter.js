import React from 'react';
import ReactDOM from 'react-dom';

import SourceCode from '../../components/containers/source-code';

it('renders react-syntax-highlighter without crashing', () => {
  const div = document.createElement('div');

  let source_code = <SourceCode lang="shell" >{`console.log('helloworld')`}</SourceCode>

  ReactDOM.render(source_code, div);
  ReactDOM.unmountComponentAtNode(div);
});
