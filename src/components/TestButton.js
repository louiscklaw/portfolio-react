import React from 'react';

function testError(){
  throw 'test error';
  return false
}

export default () => (
  <button onClick={testError}>Break the world</button>
)