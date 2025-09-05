import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { categoryList } from "../../constants/categoryLists";

const BASE_URL = 'https://dummyjson.com'
export const fetchProducts = createAsyncThunk('product/fetchProducts', async(searchTerm = '', thunkApi) => {
    try {
        let endpoint = ''
        if(categoryList.includes(searchTerm)) {
            endpoint = `${BASE_URL}/products/category/${searchTerm}`
        }else {
            endpoint = searchTerm
            ? `${BASE_URL}/products/search?q=${searchTerm}`
            : `${BASE_URL}/products`
        }

        const response = await axios.get(endpoint);
        return response.data.products
    } catch(error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

const IND_CURRENCY_RATE = 88
export const convertToINR = (price) => Math.round(price * IND_CURRENCY_RATE)

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        sortType: '',
        heading: '',
        error: ''
    },
    reducers: {
        sortProductBy(state, action) {
            state.sortType = action.payload
        },
        setHeading(state, action) {
            state.heading = action.payload
        }
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

export const { sortProductBy, setHeading } = productSlice.actions

const sortByPriceLowToHigh = (myData) => [...myData].sort((a,b) => a.price - b.price)
const sortByPriceHighToLow = (myData) => [...myData].sort((a,b) => b.price - a.price)
const sortByNameAToZ = (myData) => [...myData].sort((a,b) => a.title.localeCompare(b.title))
const sortByNameZToA = (myData) => [...myData].sort((a,b) => b.title.localeCompare(a.title))

const productDataSelector = (state) => state.products.data
const productSortSelector = (state) => state.products.sortType
export const productListSelector = createSelector([productDataSelector, productSortSelector], (productData, sortType) => {
    if(sortType === "priceLowToHigh") {
        return sortByPriceLowToHigh(productData)
    }
    if(sortType === "priceHighToLow") {
        return sortByPriceHighToLow(productData)
    }
    if(sortType === "NameAToZ") {
        return sortByNameAToZ(productData)
    }
    if(sortType === "NameZToA") {
        return sortByNameZToA(productData)
    }
    return productData
})

const headingSelector = (state) => state.products.heading
export const finalHeadingSelector = createSelector([headingSelector], (heading) => {
    if(heading) {
        return heading
    }else {
        return "Top Deals"
    }
})