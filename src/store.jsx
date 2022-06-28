import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shopSlice";
import { shopApi } from "./services/shop";

export default configureStore({
  reducer: {
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
