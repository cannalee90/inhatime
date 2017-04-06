import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import course from './course';
import counter from './counter';

const rootReducer = combineReducers({
  course,
  counter,
  routing: routerReducer,
});

export default rootReducer;
