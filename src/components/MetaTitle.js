import React from 'react';
import { MetaTags } from 'react-meta-tags';

export default ({text}) => {
  return (
    <MetaTags>
      <title>{text}</title>
    </MetaTags>
  )
}