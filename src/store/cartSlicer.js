import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import Cart from "../components/Cart";


const initialState = [];

const cartSlicer = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        },
        removeFromCart(state,action){
           return state.filter(item=>item.id!==action.payload.id)
        }
    }
})

export const {addToCart,removeFromCart} = cartSlicer.actions;
export default cartSlicer.reducer;