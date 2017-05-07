import { httpPost } from './../utils/request';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const COURSE_ERRORS = 'COURSE_ERRORS';
export const FETCH_COURSES = 'FETCH_COURSES';
export const SELECT_COURSE = 'SELECT_COURSE';
export const CLEAR_SCHEDULE = 'CLEAR_SCHEDULE';

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

const parseErrors = (errors) => {
  if (errors.response) {
    return errors.response.data.errors;
  }
  console.log(errors);
  return ['App.layout.event.UnexpectedErrors'];
};

export const selectCourse = (course) => {
  return (dispatch) => {
    if (course) {
      return dispatch({
        type: SELECT_COURSE,
        data: course,
      });
    }
    return dispatch({
      type: COURSE_ERRORS,
      errors: ['App.layout.event.selectCours.notEmpty'],
    });
  };
};

export const clearSchedule = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_SCHEDULE,
    });
  }
}

export const searchCourses = (values) => {
  return (dispatch) => {
    httpPost('/course/search', values)
    .then((data) => {
      return dispatch({
        type: FETCH_COURSES,
        data,
      });
    })
    .catch((errors) => {
      return dispatch({
        type: COURSE_ERRORS,
        errors: parseErrors(errors),
      });
    });
  };
};
