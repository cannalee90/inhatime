import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

export default (initialState = {}, { reactRouterMiddleware }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reactRouterMiddleware, thunk),
  );
  return store;
};
