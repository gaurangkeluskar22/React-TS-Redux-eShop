import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";

interface cartState{
    data: Product[],
    count: number,
    cartItemId: number,
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        data: [],
        count: 0,
        cartItemId: 0,
    } as cartState,
    
    reducers:{
        generateCartItemId : (state) => {
            state.cartItemId = state.cartItemId + 1
        },

        addToCart : (state, action : PayloadAction<Product>) => {
                state.data.push({...action.payload, cartItemId : state.cartItemId}) 
                state.count = state.data.length
        },

        removeFromCart : (state, action : PayloadAction<number>) => {
            const newData = state.data.filter((item)=> item.cartItemId !== action.payload)
            state.data = newData
            state.count = state.data.length
        }
    }
})

export const {generateCartItemId, addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer