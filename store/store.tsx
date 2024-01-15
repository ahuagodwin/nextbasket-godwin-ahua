"use client"

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "@/services/product_slice";
import singleProductReducer from "@/services/single_product_slice";
import cartReducer from "@/services/cart_slice";
import favoriteReducer from "@/services/favorite_slice";


export const store = configureStore({
    reducer: {
        products: productsReducer,
        singleProduct: singleProductReducer,
        cart: cartReducer,
        favorite: favoriteReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;