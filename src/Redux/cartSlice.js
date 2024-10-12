import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
    isLoading: false,
    error: null
}

const cartSlice = createSlice({

    name: 'cart',
    initialState,

    reducers: {

    }

})

export default cartSlice.reducer