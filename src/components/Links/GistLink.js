import React from 'react';

// import Gist from 'react-gist';
import ReactEmbedGist from 'react-embed-gist';

class testGist extends React.Component
{
  render() {
    return (
      <div>
        <ReactEmbedGist gist={this.props.gist_id} />
      </div>
    )
  }
}

export default testGist

// export default () => {
//   // let test="https://gist.github.com/louiscklaw/f9a49076aff09449a5e5e0078b30ce65"
//   // let gist_id = test.split('/').pop();
//   return(
//     <div>
//       <ReactGist id="f9a49076aff09449a5e5e0078b30ce65" />
//       {/* <h1>helloworld</h1> */}
//     </div>

//   )
// }

// export default () => {
//   return(<h1>helloworld</h1>)
// }