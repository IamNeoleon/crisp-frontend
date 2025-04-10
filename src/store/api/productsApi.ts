import { apiSlice } from "./apiSlice";
import { IProduct, TFilters } from "../../@types";

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], TFilters>({
            query: (filters) => {
                const { brands, dressLengths, size, color, sort, price } = filters;

                const queryParams = new URLSearchParams();

                brands.forEach((brand) => queryParams.append('brand[]', brand));
                dressLengths.forEach((length) => queryParams.append('dressLength[]', length));

                if (size) queryParams.append('avialable_sizes.size', size);
                if (color.colorName) queryParams.append('variants.colorName', color.colorName);
                if (sort) queryParams.append('sort', sort);
                if (price && price.from > 0) {
                    queryParams.append('basePrice[from]', price.from.toString());
                }
                if (price && price.to > 0) {
                    queryParams.append('basePrice[to]', price.to.toString());
                }

                return `/products?${queryParams.toString()}`;
            },
        })
    }),
});

export const { useGetProductsQuery } = productsApi;