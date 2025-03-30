import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies : null,
        topRatedMovies : null,
        popularMovies : null,
        upComingMovies : null,
        trailer : null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailer : (state,action)=>{
            state.trailer = action.payload;
        }
        
    }

})

export const { addNowPlayingMovies,addTrailer ,addTopRatedMovies,addPopularMovies,addUpComingMovies} = movieSlice.actions

export default movieSlice.reducer;