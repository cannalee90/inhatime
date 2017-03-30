import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute } from 'react-router';

import CounterComponent from './../containers/counter-containers';

export default ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' >
          <IndexRoute component={CounterComponent} />
          <Route path='about' component={CounterComponent2} />
        </Route>
      </Router>
    </Provider>
  );
};
