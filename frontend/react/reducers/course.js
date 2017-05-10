import * as Action from 'Actions/course';
import Immutable from 'immutable';

const initialState = {
  errors: [],
  courses: [],
  selectedCourses: Immutable.Map(),
  terms: [
    {
      Schedules: [
        {
          Courses: [],
        },
      ],
    },
  ],
  schedules: Immutable.List(),
  termSchedules: Immutable.List(),
};


export default (state = initialState, actions) => {
  switch (actions.type) {
    case Action.FETCH_TERMS:
      return {
        ...state,
        terms: actions.data.terms,
      };
    case Action.FETCH_COURSES:
      return {
        ...state,
        courses: actions.data.courses,
      };
    case Action.CHANGE_SCHEDULE:
      return {
        ...state,
        selectedCourses: Immutable.Map(
          state.termSchedules.filter((schedule) => {
            return schedule.id === actions.data;
          })
          .get(0)
          .Courses
          .map(course => [course.id, course]),
        ),
      };
    case Action.FETCH_SCHEDULES:
      return {
        ...state,
        termSchedules: Immutable.List(
          state.terms.filter((term) => {
            return term.id === actions.data;
          })[0].Schedules),
        selectedCourses: Immutable.Map(),
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
    case Action.CLEAR_SCHEDULE:
      return {
        ...state,
        selectedCourses: Immutable.Map().clear(),
      };
    case Action.REMOVE_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.delete(actions.data),
      };
    default:
      return state;
  }
};
