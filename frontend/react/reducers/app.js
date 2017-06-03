import * as App from 'Actions/app';

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
    default:
      return state;
  }
};
