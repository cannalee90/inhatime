import { combineReducers } from 'redux';
import course from './course';
import counter from './counter';

const rootReducer = combineReducers({
  course,
  counter,
});

export default rootReducer;
