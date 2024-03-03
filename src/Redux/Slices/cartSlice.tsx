import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";

interface cartState{
    data: Product[],
    count: number,
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        data: [],
        count: 0,
    } as cartState,
    reducers:{
        addToCart : (state, action : PayloadAction<Product>) => {
             state.data.push(action.payload)
             state.count = state.data.length
        },

        removeFromCart : (state, action : PayloadAction<number>) => {
            const newData = state.data.filter((item)=> item.id !== action.payload)
            state.data = newData
            state.count = state.data.length
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer