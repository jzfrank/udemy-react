// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_COUNTER_STATE,
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

const INITIAL_ISAUTHENTICATED_STATE = { isAuthenticated: false };

const isAuthenticatedSlice = createSlice({
  name: "isAuthenticated",
  initialState: INITIAL_ISAUTHENTICATED_STATE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    isAuthenticated: isAuthenticatedSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const isAuthenticatedActions = isAuthenticatedSlice.actions;

export default store;
