import React, {Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({meta_date}) => {
  console.log('meta_date',meta_date)
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={['fab', 'google' ]} />
      </div>
      <p>
        {meta_date}
      </p>
    </div>
  )
}