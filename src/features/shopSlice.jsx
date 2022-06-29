import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: [],
    products: [],
  },
  reducers: {
    updateCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
  },
});

export const { updateCategories } = shopSlice.actions;

export default shopSlice.reducer;
