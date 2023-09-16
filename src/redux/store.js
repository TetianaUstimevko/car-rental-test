import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { carsApi } from "./carsOperation";

export const store = configureStore({
	reducer: {
		[carsApi.reducerPath]: carsApi.reducer,
	},
	middleware: getDefaultMiddleware().concat(carsApi.middleware),
});

export const persistor = store;
