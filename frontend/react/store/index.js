import { createStore, applyMiddleware } from 'redux';
import reducers from './../reducers';

export default (initialState = {}, { reactRouterMiddleware }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reactRouterMiddleware),
  );
  return store;
};
