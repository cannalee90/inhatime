import * as Action from 'Actions/course';

const initialState = {
  courses: [],
  errors: [],
  selectedCourses: [],
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
        selectedCourses: [...state.selectedCourses, actions.course],
      };
    default:
      return state;
  }
};
