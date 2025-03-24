    import { configureStore } from "@reduxjs/toolkit"
    import  cartReducer from "./cartSlice"
    import authReducer from "./authSlice"


    const appStore = configureStore({
        reducer :{
            cart : cartReducer,
            aut : authReducer
        }
    })

    export default appStore;