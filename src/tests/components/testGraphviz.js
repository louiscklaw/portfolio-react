import React from 'react';
import ReactDOM from 'react-dom';

import Graphviz from '../../components/containers/graphviz';

it('renders helloworld call for graphviz without crashing', () => {
  const div = document.createElement('div');

  let graphviz_component = <Graphviz dot={`
  digraph {
    hello [label="hello"]
    world [label="world"]

    hello -> world
  }
`}/>

  ReactDOM.render(graphviz_component, div);
  ReactDOM.unmountComponentAtNode(div);
});
