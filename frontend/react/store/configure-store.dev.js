import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';
import DevTools from '../containers/dev-tools';

export default (initialState = {}, { reactRouterMiddleware }) => {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(reactRouterMiddleware, thunk),
      DevTools.instrument(),
    ),
  );
  return store;
};
