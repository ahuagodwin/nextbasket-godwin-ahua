import { publicRequest } from "@/config/connect";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk('/all/products', async (_, { rejectWithValue }) => {
  try {
      const { data } = await publicRequest.get("/products",);
      return data;
  } catch (error) {
      return rejectWithValue(error)
  }
})


const initialState = {
  products: [],
  loading: false,
  error: null,
  isSuccess: null,
} as any;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.isSuccess = action.payload;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload;
      })

  },
});

export default productsSlice.reducer;