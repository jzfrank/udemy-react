// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = { counter: 0, showCounter: true };

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
      break;
    case "decrease":
      return {
        ...state,
        counter: state.counter - action.amount,
      };
      break;
    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
      break;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
