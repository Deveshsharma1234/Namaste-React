import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTRecomendationMovies = () => {
    const movies = useSelector((state) => state.gpt?.gptRecomendedMovies);
    console.log("GPT SEARCH", movies);

    if (!movies || movies.length === 0) return null; // Handle empty state

    return (
        <div className="w-full px-4 py-6">
            {movies.map((movieArray, index) => 
                movieArray?.length > 0 && (
                    <MovieList key={index} title={movieArray[0].original_title} movies={movieArray} />
                )
            )}
        </div>
    );
};

export default GPTRecomendationMovies;
