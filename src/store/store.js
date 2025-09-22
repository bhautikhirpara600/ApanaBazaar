import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slice/productSlice";
import { cartSlice } from "./slice/cartSlice";
import { wishListSlice } from "./slice/wishListSlice";
import { authSlice } from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cartItem: cartSlice.reducer,
    wishList: wishListSlice.reducer,
    emailAuth: authSlice.reducer,
  },
});
