import { httpGet, httpPost } from './../utils/request';
import { push } from 'react-router-redux';

export const USER_SIGNIN = 'USER_SIGNIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const DEL_CURRENT_USER = 'DEL_CURRENT_USER';
export const SESSION_ERROR = 'SESSION_ERROR';

const setCurrentUser = (data) => {
  return {
    type: SET_CURRENT_USER,
    data,
  };
};

const delCurrentUser = () => {
  return {
    type: DEL_CURRENT_USER,
  };
};

export const sessionError = (errors) => {
  if (errors.response) {
    return {
      type: SESSION_ERROR,
      errors: errors.response.data.errors,
    };
  }
  return {
    type: SESSION_ERROR,
    errors: 'App.session.errors',
  };
};

export const userSignin = (values) => {
  return (dispatch) => {
    return httpPost('/auth', values)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('inhatimeAuthToken', data.token);
      }
      dispatch(setCurrentUser(data));
      dispatch(push('/'));
    })
    .catch((errors) => {
      return dispatch(sessionError(errors));
    });
  };
};

export const userSignout = () => {
  return (dispatch) => {
    localStorage.removeItem('inhatimeAuthToken');
    dispatch(delCurrentUser());
    dispatch(push('/'));
  };
};
