import React from 'react';

import MetaHelloworld from '../../components/meta/ProjectDetail'

import {Link} from 'react-router-dom'

export default () => (
  <div>
    <MetaHelloworld project_name="Project1 "/>

    <Link to="/projects">Back</Link>
    <p>project detail 1</p>
  </div>
)