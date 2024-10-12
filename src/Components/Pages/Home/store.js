import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../../Redux/productsSlice";
import cartReducer from "../../../Redux/cartSlice";


const store = configureStore({
    reducer: {
        productsSlice: productsReducer,
        cartSlice: cartReducer
    }
})

export default store;