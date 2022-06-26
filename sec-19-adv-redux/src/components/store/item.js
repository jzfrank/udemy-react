import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  title: "Test Item",
  quantity: 3,
  total: 18,
  price: 6,
};
const itemSlice = createSlice({
  name: "item",
  initialState: initialItemState,
  reducers: {
    increment(state) {
      state.quantity++;
      state.total = state.quantity * state.price;
      console.log("Increment is called", state);
    },

    decrement(state) {
      state.quantity--;
      state.total = state.quantity * state.price;
      console.log("Decrement is called", state);
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
