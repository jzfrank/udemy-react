import { createSlice } from "@reduxjs/toolkit";

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

export const isAuthenticatedActions = isAuthenticatedSlice.actions;

export default isAuthenticatedSlice.reducer;
