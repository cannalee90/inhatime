import { push, replace } from 'react-router-redux';
import { httpPost, httpGet } from './../utils/request';

export const FETCH_INITIALDATA = 'FETCH_INITIALDATA';

export const actionErrors = (errors, type = 'APP_ERROR') => {
  try {
    if (errors.response) {
      if (errors.response.headers['content-type'] === 'text/html; charset=utf-8') {
        return {
          type,
          errors: ['App.layout.errors.internalError'],
        };
      }
      switch (errors.response.status) {
        case 404:
          return replace('/404');
        case 401:
          // expireToken();
          return {
            type,
            errors: ['App.layout.errors.Unauthorized'],
          };
        case 500:
          return {
            type,
            errors: ['App.layout.errors.internalError'],
          };
        case 502:
          return {
            type,
            errors: ['App.layout.errors.internalError'],
          };
        default:
          return {
            type,
            errors: errors.response.data.errors,
          };
      }
    }
  } catch (err) {
    if (errors.response) {
      return {
        type,
        errors: ['App.layout.errors.internalError'],
      };
    }
  }
  // if (config.env === 'development') {
  return {
    type,
    errors: [errors.toString()],
  };
  // }
  // return {
  //   type,
  //   errors: ['App.layout.errors.appError'],
  // };
};

export const fetchInitialData = () => {
  return (dispatch) => {
    return httpGet('/init')
    .then((data) => {
      return dispatch({
        type: FETCH_INITIALDATA,
        data,
      });
    })
    .catch((errors) => {
      dispatch(actionErrors(errors, 'APP_ERROR'));
    });
  };
};
