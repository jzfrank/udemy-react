import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./item";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    item: itemReducer,
  },
});

export default store;
