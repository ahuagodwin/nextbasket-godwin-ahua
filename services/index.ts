"use client"

import { fetchProducts } from "./product_slice";
import { fetchSingleProducts } from "./single_product_slice";
import {
  addToCart,
  increaseCart,
  decreaseCart,
  deleteCartItem,
  clearCart,
  selectCartItems
} from "./cart_slice";
import { addToWhist, deleteFavoriteItem, clearWhist, getAllFavorite } from "./favorite_slice"

export const appService = {
  fetchProducts,
  fetchSingleProducts,
  addToCart,
  increaseCart,
  decreaseCart,
  deleteCartItem,
  clearCart,
  selectCartItems,
  addToWhist, deleteFavoriteItem, clearWhist, getAllFavorite 
};
