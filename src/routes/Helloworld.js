import React from 'react';

import {Route, Switch} from 'react-router-dom'

import Helloworld from '../pages/Helloworld'

export default ({match}) =>
{
    return (
    <Switch>
      <Route path={`${match.url}/helloworld`} component={Helloworld} />
    </Switch>
  )
}
