import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './containers/app';

import ScheduleContainer from './containers/schedule-container';
import LectureScore from './containers/lecture-score';

import SetDefaultProps from './hoc/set-default-props';
import RequireUser from './hoc/require-user';

import UserSignin from './containers/user-signin';
import UserSignup from './containers/user-signup';
// import UserPasswordFind from './containers/user-password-find';
// import UserPasswordReset from './containers/user-password-reset';

// export default (
//   <Route path='/' component={SetDefaultProps(App)}>
//     <IndexRoute component={ScheduleContainer} />
//     <Route path='user'>
//       <Route path='signin' component={UserSignin} />
//       <Route path='signup' component={UserSignup} />
//       <Route path='password' component={UserPasswordFind} />
//       <Route path='password/:hash' component={UserPasswordReset} />
//     </Route>
//     <Route path='score' component={LectureScore} />
//   </Route>
// );

export default (
  <Route path='/' component={SetDefaultProps(App)}>
    <IndexRoute component={UserSignin} />
    <Route path='user'>
      <Route path='signup' component={UserSignup} />
    </Route>
    <Route path='schedule' component={RequireUser(ScheduleContainer)} />
    <Route path='score' component={RequireUser(LectureScore)} />
  </Route>
);
