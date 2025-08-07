import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        error: ''
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setProductList(state, action) {
            state.data = action.payload
        },
        setError(state, action) {
            state.error = action.payload || 'Something went wrong!!'
        }
    }
})

export const { setLoading, setProductList, setError } = productSlice.actions