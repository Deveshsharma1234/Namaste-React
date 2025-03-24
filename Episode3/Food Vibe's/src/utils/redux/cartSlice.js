import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            // state.items= state.items.filter(item => item.id !== action.payload.id)
            state.items.pop();
        },
        clearItem:(state,action)=>{
            // state.items = [];we cannot do this
            state.items.length=0;
        }

    }
});
export const{addItem,removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer