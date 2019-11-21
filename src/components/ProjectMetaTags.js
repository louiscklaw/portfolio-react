import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ProjectMetaTags.css'

export default ({meta_tags})=>{
  let meta_tag_html = meta_tags
    .map(tag => <div className="project-tag"> {tag} </div>)

  return (
    <div className="project-meta-tags">
      <FontAwesomeIcon icon={['fas', 'hashtag' ]} />
      {meta_tag_html}
    </div>
  )
}
{/* <li key={tag}><p>{tag}</p></li> */}