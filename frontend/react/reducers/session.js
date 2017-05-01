import * as Action from './../actions/session';

const initialState = {
  isAuth: false,
  currentUser: {
    email: null,
    admin: false,
    emailAuth: false,
  },
  errors: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case Action.SET_CURRENT_USER:
      return {
        isAuth: true,
        currentUser: actions.data.user,
        errors: [],
      };
    case Action.SESSION_ERROR:
      return {
        ...state,
        errors: actions.errors,
      };
    case Action.DEL_CURRENT_USER:
      return {
        isAuth: false,
        currentUser: initialState.currentUser,
        errors: [],
      };
    default:
      return state;
  }
};
