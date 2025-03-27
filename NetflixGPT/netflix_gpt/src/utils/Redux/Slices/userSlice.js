import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
        addUser: (state,acton)=>{
            return acton.payload;

        },
        removeUser: (state,acton)=>{
            return null;
        },

    }

})
export const {addUser,removeUser} = userSlice.actions;



export default userSlice.reducer