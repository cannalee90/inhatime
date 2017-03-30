import { INCREMENT, DECREMENT } from 'Contestants';

const initialState = {
  counter: 0,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return {
        counter: state.counter + 10,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
