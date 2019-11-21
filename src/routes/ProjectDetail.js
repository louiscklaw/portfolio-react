import React from 'react';

import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'

import TradingviewDashboard from '../pages/projects/TradingviewDashboard'
import VoronTryout from '../pages/projects/VoronTryout'

import tile_configs from '../config/tile_configs'

function getRoutes(match){
  return Object.keys(tile_configs).map(tile_config_key => {
    return (<Route path={`${match.url}/${tile_config_key}`} component={tile_configs[tile_config_key]['component']} />)
  })
}

export default ({match}) =>
{
    return (
    <Switch>
      {getRoutes(match)}
    </Switch>
  )
}
