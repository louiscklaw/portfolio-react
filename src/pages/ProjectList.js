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
        </ul>
      </div>
  )
}