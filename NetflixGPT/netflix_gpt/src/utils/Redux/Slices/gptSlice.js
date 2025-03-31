    import { createSlice } from "@reduxjs/toolkit";

    const gptSlice = createSlice({
        name : "gpt",
        initialState : {
            isTrue : false,
            gptRecomendedMovies : null

        },
        reducers :{
            addGpt : (state,action)=>{
                state.isTrue =  true;
            },
            removeGpt : (state,action)=>{
                state.isTrue= false;
                state.gptRecomendedMovies = null;
            },
            addGptRecomendedMovies : (state,action)=>{
                state.gptRecomendedMovies = action.payload;
            }
        }
    })

    export const{addGpt, removeGpt,addGptRecomendedMovies} = gptSlice.actions;
    export default gptSlice.reducer;
