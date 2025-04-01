import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        isLoggedIn : false,
        info : null,
    },
    reducers:{
        userLogedIn: (state) => {
            state.isLoggedIn = true; 
        },
        useLoggedOut: (state) => {
            state.isLoggedIn = false;
        },
        setInfo: (state, action) => {
            state.info = action.payload;  
        },
        clearInfo: (state) => {
            state.info = null;
        },
       }
    
})

export const {userLogedIn,useLoggedOut,setInfo,clearInfo} = userSlice.actions;
export default userSlice.reducer;