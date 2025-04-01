import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice"
import toggleReducer from "../slice/toggleSlice"
import notificationReducer from "../slice/notificatonSlice"


const appStore = configureStore({
    reducer :{
        user : userReducer,
        toggle : toggleReducer,
        notification : notificationReducer,

    }
})

export default appStore;