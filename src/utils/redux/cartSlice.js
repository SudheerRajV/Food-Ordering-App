import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log('payload', action.payload);
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
      //or alternate way to clear the items in state
      // return [{items: []}]
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const {addItem, removeItem, clearCart} =  cartSlice.actions
export default cartSlice.reducer
