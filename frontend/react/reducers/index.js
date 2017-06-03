import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import app from './app';
import course from './course';
import session from './session';

const rootReducer = combineReducers({
  app,
  course,
  routing,
  session,
  form,
});

export default rootReducer;
