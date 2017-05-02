import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import ScheduleContainer from './containers/schedule-container';

import UserSignin from './containers/user-signin';
import UserSignup from './containers/user-signup';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ScheduleContainer} />
    <Route path='user'>
      <Route path='signin' component={UserSignin} />
      <Route path='signup' component={UserSignup} />
    </Route>
  </Route>
);
