import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../Slices/userSlice";
import movieSlice from "../Slices/movieSlice";




const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie : movieSlice,

    }
})

export default appStore;