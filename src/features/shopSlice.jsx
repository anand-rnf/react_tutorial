import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: [],
    products: [],
    cart: [],
  },
  reducers: {
    updateCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
    updateCart: (state, action) => {
      const cart = state.cart;
      const item = action.payload;
      const index = cart.findIndex((cartItem) => cartItem.id == item.id);
      if (index > -1) {
        cart[index].quantity += item.quantity;
      } else {
        cart.push(item);
      }
      state.cart = cart;
    },
  },
});

export const { updateCategories, updateCart } = shopSlice.actions;

export default shopSlice.reducer;
