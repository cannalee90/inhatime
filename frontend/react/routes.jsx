import React from 'react';

import { Route, IndexRoute } from 'react-router';

import CounterComponent from './containers/counter-containers';

export default (
  <Route path='/' >
    <IndexRoute component={CounterComponent} />
  </Route>
);
