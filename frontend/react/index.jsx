import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import DefaultContainer from './containers/app-containers';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer >
      <Component/>
    </AppContainer>
    , document.querySelector('#react')
  );
};

render(DefaultContainer);

if (module.hot) {
  module.hot.accept('./containers/app-containers', () => {
    render(DefaultContainer);
  });
}
