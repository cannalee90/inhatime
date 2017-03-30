import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/root';
import configureStore from './store';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('react'),
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    const NewRoot = require('./containers/root').default;
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('react'),
    );
  });
}
