import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://dummyjson.com'
export const fetchProducts = createAsyncThunk('product/fetchProducts', async(_, thunkApi) => {
    try {
        const response = await axios.get(`${BASE_URL}/products`)
        return response.data.products
    } catch(error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || 'Something went wrong!!'
            })
    }
})

export const { setLoading, setProductList, setError } = productSlice.actions