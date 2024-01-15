"use client"

// cartSlice.ts

import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
  description: string
}

interface FavoriteState {
  items: FavoriteItem[];
}

const STORAGE_KEY = 'next_like';

const getStoredItems = (): FavoriteItem[] => {
  const storedItems = localStorage.getItem(STORAGE_KEY);
  return storedItems ? JSON.parse(storedItems) : [];
};

const initialState: FavoriteState = {
  items: getStoredItems()
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToWhist: (state, action: PayloadAction<FavoriteItem>) => {
      const { id, name, price, quantity, thumbnail, description } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity, thumbnail, description});
      }
       // Update local storage
       if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      }
    },

    deleteFavoriteItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);

      // Update local storage
      // Update local storage
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      }
    },

    clearWhist: (state) => {
      state.items = [];
      
       // Update local storage
       if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    },
  },
});

export const { addToWhist, deleteFavoriteItem, clearWhist } = favoriteSlice.actions;

export const getAllFavorite = (state: RootState) => state.favorite.items;
export default favoriteSlice.reducer;
