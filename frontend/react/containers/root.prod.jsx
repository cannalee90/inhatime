import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './../routes';

export default ({ store, history }) => {
  return (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
      </div>
    </Provider>
  );
};
