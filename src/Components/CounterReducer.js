import { increament, decreament, reset } from "./Action";

const initialState = {
  counter: 0,
};

export function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case increament:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case decreament:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case reset:
      return { ...initialState };
    default:
      return state;
  }
}
