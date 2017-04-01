import { createStore, applyMiddleware } from 'redux';
import reducers from './../reducers';
import DevTools from './../containers/dev-tools';

export default (initialState = {}, { reactRouterMiddleware }) => {
  const store = createStore(
    reducers,
    initialState,
    DevTools.instrument(),
    applyMiddleware(reactRouterMiddleware),
  );
  return store;
};
