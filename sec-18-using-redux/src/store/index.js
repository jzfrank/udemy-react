// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//       break;
//     case "decrement":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//       break;
//     case "increase":
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//       break;
//     case "decrease":
//       return {
//         ...state,
//         counter: state.counter - action.amount,
//       };
//       break;
//     case "toggle":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//       break;
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// counterSlice.actions.toggleCounter; //action creator

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
