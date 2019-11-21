import React from 'react';

import {Link} from 'react-router-dom'

import MetaHelloworld from '../../components/meta/ProjectDetail'

import ProjectTitle from '../../components/ProjectTitle'
import ProjectMeta from '../../components/ProjectMeta'
import ProjectDescription from '../../components/ProjectDescription'


export default () => (
  <div>
    <MetaHelloworld project_name="Project1 "/>
    <Link to="/projects">Back</Link>

    <ProjectTitle project_title="test title" />
    <ProjectMeta project_meta="test meta"/>
    <ProjectDescription project_description="test description"/>

  </div>
)