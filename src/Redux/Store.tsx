import { configureStore } from "@reduxjs/toolkit";
import fetchProductSlice from "./Slices/fetchProductSlice";


export const Store = configureStore({
    reducer:{
        AllProducts : fetchProductSlice,
    }
})
