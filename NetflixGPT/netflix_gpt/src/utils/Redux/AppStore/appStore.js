import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../Slices/userSlice";
import movieSlice from "../Slices/movieSlice";
import gptSlice from "../Slices/gptSlice";
import searchSlice from "../Slices/searchSlice";


const appStore = configureStore({
    reducer:{
        user:userSlice,
        movie : movieSlice,
        gpt : gptSlice,
        search : searchSlice

    }
})

export default appStore;