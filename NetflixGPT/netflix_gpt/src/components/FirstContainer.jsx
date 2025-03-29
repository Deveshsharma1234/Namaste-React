import React from 'react';

import {useSelector} from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';




const FirstContainer = () => {

const movies = useSelector((store)=> store.movie?.nowPlayingMovies)
if(!movies) return;//
const mainMovie = movies[0];
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
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi, eveniet atque consectetur doloribus voluptates amet quasi mollitia in facere minima, nobis voluptatibus provident non necessitatibus nam fuga magni dolorem nihil? Esse iste, eligendi vitae sequi hic numquam quidem tenetur error pariatur? Unde eligendi fugit aut, expedita quia tempora iusto quam hic nesciunt sequi ex non nostrum qui praesentium harum corporis numquam atque, reprehenderit nisi nam dolor commodi. Error aperiam necessitatibus voluptatibus cumque enim provident minus expedita vel quidem voluptas.
      </div>
      </>
    );
}

export default FirstContainer;
