import { configureStore } from "@reduxjs/toolkit";
import fetchProductSlice from "./Slices/fetchProductSlice";
import cartSlice from "./Slices/cartSlice";


export const Store = configureStore({
    reducer:{
        AllProducts : fetchProductSlice,
        Cart : cartSlice,
    }
})
