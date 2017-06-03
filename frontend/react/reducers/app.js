import * as App from 'Actions/app';
import * as Session from 'Actions/session';

const initialState = {
  errors: [],
  infos: [],
  departments: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case App.FETCH_INITIALDATA:
      return {
        ...state,
        departments: actions.data.departments,
      };
    case Session.SESSION_ERROR:
      return {
        ...state,
        errors: actions.errors,
      };
    default:
      return state;
  }
};
