import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {
    return (
        <div className=' p-9  text-2xl text-white gap-2'>
            <h1 className='text-2xl font-bold text-white mb-5'>{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide  gap-2">
           
            <div className=" flex gap-4 ">
                {movies.map((movie) => (
                    <MovieCards key={movie.id} movie={movie} />
                ))}
            </div>
            </div>

        </div>
    );
}

export default MovieList;
