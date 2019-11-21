import React from 'react';

import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'

import TradingviewDashboard from '../pages/projects/TradingviewDashboard'
import VoronTryout from '../pages/projects/VoronTryout'

export default ({match}) =>
{
    return (
    <Switch>
      <Route path={`${match.url}/tradingview-dashboard`} component={TradingviewDashboard} />
      <Route path={`${match.url}/voron-tryout`} component={VoronTryout} />
    </Switch>
  )
}
