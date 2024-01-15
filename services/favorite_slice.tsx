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

const STORAGE_KEY = 'godwin_ahua_like';

const initialState: FavoriteState = {
  items: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },

    deleteFavoriteItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);

      // Update local storage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },

    clearWhist: (state) => {
      state.items = [];

      // Update local storage
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { addToWhist, deleteFavoriteItem, clearWhist } = favoriteSlice.actions;

export const getAllFavorite = (state: RootState) => state.favorite.items;
export default favoriteSlice.reducer;
