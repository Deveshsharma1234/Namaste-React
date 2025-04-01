import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name : "toggle",
    initialState :{
        isHambergerMenuOpen : false,
    },
    reducers: {
        openHambergerMenu: (state,action)=>{
            state.isHambergerMenuOpen = true;
        },
        closeHambergerMenu: (state,action)=>{
            state.isHambergerMenuOpen = false;
        }


    }
})
export  const {openHambergerMenu, closeHambergerMenu} = toggleSlice.actions;
export default toggleSlice.reducer;
