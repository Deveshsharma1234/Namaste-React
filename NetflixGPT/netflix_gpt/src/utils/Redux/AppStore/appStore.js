import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../Slices/userSlice";
import movieSlice from "../Slices/movieSlice";
import gptSlice from "../Slices/gptSlice";






const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie : movieSlice,
        gpt : gptSlice

    }
})

export default appStore;