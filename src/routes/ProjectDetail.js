import React from 'react';

import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'

import Helloworld from '../pages/Helloworld'
import ProjectDetail1 from '../pages/projects/Project1'

import TradingviewDashboard from '../pages/projects/TradingviewDashboard'

export default ({match}) =>
{
    return (
    <Switch>
      <Route path={`${match.url}/tradingview-dashboard`} component={TradingviewDashboard} />
    </Switch>
  )
}
