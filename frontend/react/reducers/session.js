import * as Action from './../actions/session';

const initialState = {
  isAuth: false,
  currentUser: {
    email: null,
    admin: false,
    emailAuth: false,
  },
  errors: [],
  infos: [],
  isFetching: false,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case Action.SET_CURRENT_USER:
      return {
        isFetching: false,
        isAuth: true,
        currentUser: actions.data.user,
        errors: [],
      };
    case Action.SET_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case Action.SESSION_ERROR:
      return {
        ...state,
        isFetching: false,
        errors: actions.errors,
      };
    case Action.DEL_CURRENT_USER:
      return {
        isAuth: false,
        currentUser: initialState.currentUser,
        errors: [],
      };
    case Action.SESSION_INFO:
      return {
        ...state,
        infos: actions.infos,
      };
    case Action.CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    case Action.CLEAR_INFOS:
      return {
        ...state,
        infos: [],
      };
    default:
      return state;
  }
};
