import { httpGet, httpPost } from './../utils/request';

export const userSignin = (values) => {
  return (dispatch) => {
    return httpPost('/auth', values)
    .then((data) => {
      return dispatch({
        type: 'USER_SIGNIN',
        data,
      });
    })
    .catch((errors) => {
      return dispatch({
        type: 'SESSION_ERROR',
        errors,
      })
    });
  }
};
