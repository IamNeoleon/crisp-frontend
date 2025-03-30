import { apiSlice } from "./apiSlice";
import { IProduct } from "../../@types";

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => "/products",
        })
    }),
});

export const { useGetProductsQuery } = productsApi;
