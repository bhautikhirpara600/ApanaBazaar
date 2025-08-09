import { createSelector, createSlice } from "@reduxjs/toolkit";

const findCartIndex = (state, action) => state.cartData.findIndex((cartItem) => cartItem.productId === action.payload.productId)

export const cartSlice = createSlice({
    name: 'cartItem',
    initialState: { cartData: [] },
    reducers: {
        addCartItem(state, action) {
            const cartIndex = findCartIndex(state, action)
            if(cartIndex === -1) {
                state.cartData.push(action.payload)
            } else {
                state.cartData[cartIndex].quantity += 1
            }
        },
        removeCartItem(state, action) {
            const cartIndex = findCartIndex(state, action)
            state.cartData.splice(cartIndex, 1)
        },
        incrementQuantity(state, action) {
            const cartIndex = findCartIndex(state, action)
            state.cartData[cartIndex].quantity += 1
        },
        decrementQuantity(state, action) {
            const cartIndex = findCartIndex(state, action)
            if(state.cartData[cartIndex].quantity === 1) {
                state.cartData.splice(cartIndex, 1)
            }else {
                state.cartData[cartIndex].quantity -= 1
            }
        }
    }
})

export const { addCartItem, removeCartItem, incrementQuantity, decrementQuantity } = cartSlice.actions

const cartDataSelector = (state) => state.cartItem.cartData
const productDataSelector = (state) => state.products.data

export const finalCartDataSelector = createSelector([cartDataSelector, productDataSelector], (cartItems, products) => (
    cartItems.map((cartItem) => {
        const findProduct = products.find((product) => product.id === cartItem.productId)
        if(findProduct) {
            return {...findProduct, quantity: cartItem.quantity}
        }
    })
))

export const totalPriceSelector = createSelector([finalCartDataSelector], (cartItems) => cartItems.reduce((acc, curr) => acc + Math.round(curr.price * 90) * (curr.quantity), 0))