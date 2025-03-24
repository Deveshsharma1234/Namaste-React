import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState :{
        name : "defalut name",
        jwt :"",
    },
    reducers: {
        setUser : (state,action)=>{
            state.name = action.payload.name;
            state.jwt = action.payload.jwt;
        },
        clearUser: (state,action)=>{
            state.name = "default name";
            state.jwt = "";
        }

    }
})

export const {setUser,clearUser} = authSlice.actions;

export default authSlice.reducer;