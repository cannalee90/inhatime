import { httpPost } from './../utils/request';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const COURSE_ERRORS = 'COURSE_ERRORS';
export const FETCH_COURSES = 'FETCH_COURSES';

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

const parseErrors = (errors) => {
  if (errors.response) {
    return errors.response.data.errors;
  }
  return ['App.layout.event.UnexpectedErrors'];
};



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