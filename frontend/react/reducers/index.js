import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import course from './course';
import counter from './counter';

const rootReducer = combineReducers({
  course,
  counter,
  routing,
  form,
});

export default rootReducer;
