import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./item";

const store = configureStore({
  reducer: {
    // cart: cartReducer,
    item: itemReducer,
  },
});

export default store;
