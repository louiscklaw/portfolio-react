import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './GithubLink.css'

export default ({link, text}) => {
  return (
    <div className="github-link">
      <a href={link} target="_blank" className="window-link" rel="noopener noreferrer">
        {text || link}
        <div className="fa_icon">
          <FontAwesomeIcon icon={['fab', 'github' ]} />
        </div>
        <div className="fa_icon">
          <FontAwesomeIcon icon={['fas', 'external-link-alt' ]} />
        </div>
      </a>
    </div>
  )
}
