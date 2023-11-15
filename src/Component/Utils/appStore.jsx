import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice"

const appStore = configureStore({
    reducer:{               //it contains big reducer inside the big reducer has small reducer
        cart : cartReducer,     //small reducer
    },  
});

export default appStore;