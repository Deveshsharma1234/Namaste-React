import React from 'react';

import {useSelector} from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';




const FirstContainer = () => {

// const movies = useSelector((store)=> store.movie?.nowPlayingMovies)
const movies = useSelector(store => [
  ...(store.movie?.nowPlayingMovies || []),
  ...(store.movie?.topRatedMovies || []),
  ...(store.movie?.popularMovies || []),
  ...(store.movie?.upComingMovies || [])
]);
if(!movies.length) return;//
const mainMovie = movies[Math.floor(Math.random() * movies.length)];
console.log( "first Container :",mainMovie);


    return (
        <>
        <div className="relative w-full min-h-screen ">
        {/* Background Video */}
   
       <VideoBackground id={mainMovie.id} />
      
        {/* Foreground Content */}
        <div className="absolute inset-0 flex items-center justify-start px-16 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <VideoTitle title={mainMovie.original_title} desc={mainMovie.overview} />
          
          </div>
        </div>
      
      </>
    );
}

export default FirstContainer;
