import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers :{
        addItem : (state,action)=>{
            //we are mutating the state over here
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length =0;
        },
    },
})
    //we will export actions and reducer
export const {addItem,removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;