import React from 'react';

import {Link} from 'react-router-dom'

import MetaHelloworld from '../../components/meta/ProjectDetail'

import ProjectTitle from '../../components/ProjectTitle'

export default () => (
  <div>

    <MetaHelloworld project_name="Project1 "/>

    <Link to="/projects">Back</Link>

    <ProjectTitle project_title="test title" />

  </div>
)