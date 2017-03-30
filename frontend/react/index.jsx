import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';


import Root from './containers/root';
import configureStore from './store';


const reactRouterMiddleware = routerMiddleware(browserHistory);
const store = configureStore({}, { reactRouterMiddleware });

const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('react'),
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    const NewRoot = require('./containers/root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('react'),
    );
  });
}
