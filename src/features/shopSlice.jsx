import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: [],
  },
  reducers: {
    updateCategories: (state, payload) => {
      state.categories = payload.categories;
    },
  },
});

export const { updateCategories } = shopSlice.actions;

export default shopSlice.reducer;
