import * as Action from 'Actions/course';
import Immutable from 'immutable';

const initialState = {
  errors: [],
  courses: [],
  selectedCourses: Immutable.Map(),
  terms: [],
  schedules: Immutable.List(),
  termSchedules: Immutable.List(),
};


export default (state = initialState, actions) => {
  switch (actions.type) {
    case Action.FETCH_TERMS:
      return {
        ...state,
        terms: actions.data.terms,
        schedules: Immutable.fromJS(actions.data.schedules),
      };
    case Action.FETCH_COURSES:
      return {
        ...state,
        courses: actions.data.courses,
      };
    case Action.CHANGE_SCHEDULE:
      const selectedCourses = Immutable.Map(
        state.schedules.filter((schedule) => {
          return schedule.get('id') === actions.data;
        })
        .get(0)
        .get('Courses')
        .map(course => [course.get('id'), course])
      );
      return {
        ...state,
        selectedCourses,
      };
    case Action.FETCH_SCHEDULES:
      return {
        ...state,
        termSchedules: state.schedules.filter((schedule) => {
          return schedule.get('TermId') === actions.data;
        }),
      };
    case Action.CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    case Action.SELECT_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.set(actions.data.id, Immutable.Map(actions.data)),
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
