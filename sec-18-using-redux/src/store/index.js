import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import isAuthenticatedReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAuthenticated: isAuthenticatedReducer,
  },
});

export default store;
