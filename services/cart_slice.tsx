// cartSlice.ts

import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
  description: string
}

interface CartState {
  items: CartItem[];
}

const STORAGE_KEY = 'godwin_ahua_cart';

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price, quantity, thumbnail, description } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity, thumbnail, description});
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },
    increaseCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;

        // Update local storage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      }
    },
    decreaseCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity -= 1;

        // Remove item from cart if quantity becomes zero
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== itemId);
        }

        // Update local storage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      }
    },

    deleteCartItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);

      // Update local storage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];

      // Update local storage
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { addToCart, increaseCart, decreaseCart,  deleteCartItem, clearCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
