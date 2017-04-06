import { CLEAR_COURSES, FETCH_COURSES } from 'Contestants';


const initialState = {
  courses: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case CLEAR_COURSES:
      return state;
    case FETCH_COURSES:
      return initialState;
    default:
      return state;
  }
};
