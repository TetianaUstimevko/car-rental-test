import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
	reducerPath: "carsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://648f276f75a96b664444c3ef.mockapi.io",
	}),
	tagTypes: ["Cars", "Favorites"],
	endpoints: builder => ({
		getCars: builder.query({
			query: ({ page, limit }) => `advert/?p=${page}&l=${limit}`,
			providesTags: ["Cars"],
		}),
		getCarsByBrand: builder.query({
			query: ({ page, limit, brand }) => `advert/?make=${brand}&p=${page}&l=${limit}`,
			providesTags: ["Cars"],
		}),
		getFavorites: builder.query({
			query: () => `favorites`,
			providesTags: ["Favorites"],
		}),
		addToFavorites: builder.mutation({
			query: data => ({
				url: `favorites`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Favorites"],
		}),
		removeFromFavorites: builder.mutation({
			query: id => ({
				url: `favorites/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Favorites"],
		}),
	}),
});

export const {
	useGetCarsQuery,
	useGetCarsByBrandQuery,
	useGetFavoritesQuery,
	useAddToFavoritesMutation,
	useRemoveFromFavoritesMutation,
} = carsApi;
