import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name : "notification",
    initialState : {
        isNotificatonOpen : false,
        notificationCount : 0,
        notification : []
    },
    reducers: {
        openNotification: (state) => {
            state.isNotificatonOpen = true;
        },
        closeNotification: (state) => {
            state.isNotificatonOpen = false;
        },
        setNotificatonCount: (state,action)=>{
            state.notificationCount += 1;
        },
        setNotification: (state,action) => {
            state.notification.push(action.payload);
        }
    }
})
export const {openNotification,closeNotification,setNotificatonCount,setNotification} = notificationSlice.actions;
export default notificationSlice.reducer    ;