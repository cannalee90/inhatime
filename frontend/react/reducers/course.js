import * as Action from 'Actions/course';
import Immutable from 'immutable';

const initialState = {
  errors: [],
  courses: [],
  selectedCourses: Immutable.Map(),
};


export default (state = initialState, actions) => {
  switch (actions.type) {
    case Action.FETCH_COURSES:
      return {
        ...state,
        courses: actions.data.courses,
      };
    case Action.CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    case Action.SELECT_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.set(actions.data.id, actions.data),
      };
    default:
      return state;
  }
};
