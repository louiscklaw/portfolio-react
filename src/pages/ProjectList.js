import React from 'react';

import ProjectTile from '../components/ProjectTile'

import './ProjectList.css'

import tile_configs from '../config/tile_configs'

function tileContent(){
  return Object.keys(tile_configs).map( tile_key => {
    return (
      <li>
        <ProjectTile
          proj_name={tile_key}
          proj_image={tile_configs[tile_key]['image']}
          proj_link={'/project_detail/'+tile_key}
        />
      </li>
    )
  })
}

export default () => {

  return (
      <div className="project-list-container">
        <ul>
          {tileContent()}

          <li>
            <ProjectTile project_name="project3" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project4" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project5" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project6" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project7" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project8" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project9" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project10" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project11" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project12" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project13" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project14" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project15" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
          <li>
            <ProjectTile project_name="project16" proj_image="https://via.placeholder.com/400x200.png" />
          </li>
        </ul>
      </div>
  )
}