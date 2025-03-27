import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../Slices/userSlice";


const appStore = configureStore({
    reducer:{
        user:userSlice

    }
})

export default appStore;