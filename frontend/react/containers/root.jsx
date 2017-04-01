import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute } from 'react-router';

import CounterComponent from './../containers/counter-containers';
import DevTools from './dev-tools';

export default ({ store, history }) => {
  return (
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path='/' >
            <IndexRoute component={CounterComponent} />
          </Route>
        </Router>
        <DevTools />
      </div>
    </Provider>
  );
};
