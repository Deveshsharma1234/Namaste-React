import { createSlice } from "@reduxjs/toolkit";
// const stored = JSON.parse(window.localStorage.getItem("cart")) || ;
const stored = JSON.parse(window.localStorage.getItem("cart"))||[]; 
console.log("Already stored ::= = ",stored)// Ensure it's always an array


const cartSlice = createSlice({

    name: 'cart',
    initialState: {
      
      
        items: stored
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            // window.localStorage.setItem("cart",action.payload);
            window.localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeItem:(state,action)=>{
            console.log("state :" ,state.items)
            console.log("Removing item with id:", action.payload);
            state.items= state.items.filter(item =>{
                console.log("Item id: ", item.card.info.id)
              return item.card.info.id !== action.payload});
              window.localStorage.setItem("cart", JSON.stringify(state.items)); 
          
            // state.items.pop();
        },
        clearItem:(state,action)=>{
            // state.items = [];we cannot do this
            // console.log("Removing item with id:", id);
            state.items.length=0;
             window.localStorage.removeItem("cart"); 

        }

    }
});
export const{addItem,removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer