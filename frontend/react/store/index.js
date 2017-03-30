/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import reducers from './../reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default (initialState = {}) => {
  const store = createStoreWithMiddleware(
    reducers,
    initialState,
  );
  return store;
};
