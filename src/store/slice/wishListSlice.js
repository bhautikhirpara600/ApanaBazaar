import { createSelector, createSlice } from "@reduxjs/toolkit";

const findWishListIndex = (state, action) => state.wishListData.findIndex(({productId}) => productId === action.payload.productId)

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState: { wishListData: [] },
    reducers: {
        addWishListItem(state, action) {
            state.wishListData.push(action.payload)
        },
        removeWishListItem(state, action){
            const wishListIndex = findWishListIndex(state, action)
            state.wishListData.splice(wishListIndex, 1)
        }
    }
})

export const { addWishListItem, removeWishListItem } = wishListSlice.actions

const wishListSelector = (state) => state.wishList.wishListData
const productDataSelector = (state) => state.products.data
export const finalWishListSelector = createSelector([wishListSelector, productDataSelector], (wishLists, products) => (
    wishLists.map((wishList) => products.find((product) => product.id === wishList.productId))
))