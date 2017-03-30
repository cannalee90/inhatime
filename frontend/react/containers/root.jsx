import React from 'react';
import { Provider } from 'react-redux';
import DefaultContainr from './app-container';
// import store from './../store';

export default ({ store }) =>
  <Provider store={store}>
    <div>
      <DefaultContainr />
    </div>
  </Provider>;
