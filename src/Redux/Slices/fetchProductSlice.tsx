import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL : string | undefined = process.env.REACT_APP_API_URL || ''

export const fetchedAllProducts = createAsyncThunk("fetchedAllProducts", async () => {
    const response = await axios.get(apiURL)
    return response.data
});

const fetchProductSlice = createSlice({
    name:'fetchProductSlice',
    initialState: {
        isLoading : false,
        data : [],
    },
    reducers : {
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchedAllProducts.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchedAllProducts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload.products
        })
    }
})

export default fetchProductSlice.reducer