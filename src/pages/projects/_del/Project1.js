import React from 'react';

import {Link} from 'react-router-dom'

import MetaHelloworld from '../../components/meta/ProjectDetail'

import ProjectTitle from '../../components/ProjectTitle'
import ProjectMeta from '../../components/ProjectMeta'
import ProjectDescription from '../../components/ProjectDescription'

import './Project1.css'

export default () => (
  <div className="project-detail">
    <MetaHelloworld project_name="Project1 "/>
    <Link to="/projects">Back</Link>

    <div >
      <ProjectTitle project_title="test title" />

      <ProjectMeta
        meta_date="test meta date"
        meta_tags={['tag1','tag2','tag3']}
        />


      <ProjectDescription project_description="test description"/>
    </div>

  </div>
)