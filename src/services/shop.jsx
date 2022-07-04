import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.storerestapi.com/" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "categories",
      }),
    }),
    getSingleCategory: builder.query({
      query: (slug) => ({
        url: `categories/${slug}`,
      }),
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetSingleCategoryQuery } = shopApi;
