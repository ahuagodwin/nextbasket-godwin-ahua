"use client"

import { publicRequest } from "@/config/connect";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSingleProducts = createAsyncThunk('/all/products/single', async (id: number, { rejectWithValue }) => {
  try {
      const { data } = await publicRequest.get(`/products/${id}`);
      return data;
  } catch (error) {
    return rejectWithValue(error);
  }
})


const initialState = {
  singleProduct: [],
  loading: false,
  error: null,
  isSuccess: null,
} as any;

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })

      .addCase(fetchSingleProducts.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload;
      })

  },
});

export default singleProductSlice.reducer;