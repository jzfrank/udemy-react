import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
