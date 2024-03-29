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
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    restoreCart: (state) => {
      const cart = sessionStorage.getItem("cart")
        ? JSON.parse(sessionStorage.getItem("cart"))
        : [];
      state.cart = cart;
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload.id;
      const cart = state.cart;
      const index = cart.findIndex((cartItem) => cartItem.id == itemId);
      if (index > -1) {
        cart.splice(index, 1);
      }
      state.cart = cart;
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { updateCategories, updateCart, restoreCart, removeItemFromCart } =
  shopSlice.actions;

export default shopSlice.reducer;
