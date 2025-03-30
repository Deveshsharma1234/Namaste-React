import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecoundContainer = () => {
    const movies = useSelector((store)=> store.movie );
    console.log("Secound Container :",movies);
    // if (!movies || Object.keys(movies).length === 0) return null;
    return (
        <div className='bg-black   -mt-40 '>
            {/* Hello from secound container */}
           <div className='p-20'>
           <MovieList title= {"Now Playing"} movies={movies.nowPlayingMovies||[]}/>
            <MovieList title= {"Top-Rated"} movies={movies.topRatedMovies||[]}/>
            <MovieList title= {"Popular"} movies={movies.popularMovies||[]}/>
            <MovieList title= {"Upcoming"} movies={movies.upComingMovies||[]}/>
           </div>
        </div>
    );
}

export default SecoundContainer;
