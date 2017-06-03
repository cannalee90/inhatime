import { push } from 'react-router-redux';
import { httpGet, httpPost, httpPut } from './../utils/request';
import { actionErrors } from './app';

export const USER_SIGNIN = 'USER_SIGNIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const DEL_CURRENT_USER = 'DEL_CURRENT_USER';
export const SESSION_ERROR = 'SESSION_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_INFOS = 'CLEAR_INFOS';
export const SESSION_INFO = 'SESSION_INFO';

export const SET_FETCHING = 'SET_FETCHING';

export const setFetching = () => {
  return {
    type: SET_FETCHING,
  };
};

const parseErrors = (errors) => {
  if (errors.response) {
    return errors.response.data.errors;
  }
  return ['App.layout.event.UnexpectedErrors'];
};

const setCurrentUser = (data) => {
  return {
    type: SET_CURRENT_USER,
    data,
  };
};

const sessionInfos = (infos) => {
  return {
    type: SESSION_INFO,
    infos,
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

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const clearInfos = () => {
  return {
    type: CLEAR_INFOS,
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    dispatch(setFetching());
    return httpGet('/auth')
    .then((data) => {
      dispatch(setCurrentUser(data));
    })
    .catch((errors) => {
      return dispatch(actionErrors(errors, SESSION_ERROR));
    });
  };
};

export const userSignin = (values) => {
  return (dispatch) => {
    return httpPost('/auth', values)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('inhatimeAuthToken', data.token);
      }
      return dispatch(setCurrentUser(data));
    })
    .catch((errors) => {
      return dispatch(actionErrors(errors, SESSION_ERROR));
    });
  };
};

export const userSignup = (values) => {
  const { password, email } = values;
  return (dispatch) => {
    return httpPost('/user', values)
    .then((data) => {
      dispatch(userSignin({ password, email }));
      dispatch(push('/schedule'));
    })
    .catch((errors) => {
      return dispatch(actionErrors(errors, SESSION_ERROR));
    });
  };
};

export const passwordReset = (values) => {
  return (dispatch) => {
    return httpPost('/auth/password', values)
    .then((data) => {
      dispatch(push({
        pathname: '/user/signin',
        state: {
          infos: ['메일을 확인해주세요'],
        },
      }));
    })
    .catch((errors) => {
      return dispatch(actionErrors(errors, SESSION_ERROR));
    });
  };
};

export const passwordConfirm = (hash) => {
  return (dispatch) => {
    return httpPost(`/auth/password/${hash}`)
    .then((data) => {
      localStorage.setItem('inhatimeAuthToken', data.token);
      return dispatch(sessionInfos(['비밀번호 초기화에 성공했습니다', '새로운 비밀번호로 변경해주세요.']));
    })
    .catch((errors) => {
      dispatch(push({
        pathname: '/user/password',
      }));
      dispatch(actionErrors(errors, SESSION_ERROR));
    });
  };
};

export const passwordChange = (values) => {
  return (dispatch) => {
    return httpPut('/auth/password/', values)
    .then((data) => {
      dispatch(push({
        pathname: '/user/signin',
        state: {
          infos: ['비밀번호가 변경되었습니다.'],
        },
      }));
    })
    .catch((errors) => {
      dispatch(actionErrors(errors, SESSION_ERROR));
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
