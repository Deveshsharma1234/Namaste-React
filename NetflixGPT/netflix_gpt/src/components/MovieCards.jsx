import React from 'react';
import { CDN_URI } from '../utils/constants';

const MovieCards = ({movie}) => {
    console.log("Movie cards",movie);
    const {id,overview,original_title,poster_path,title,release_date,vote_average,vote_count,original_language} = movie;
    return (
        <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center brightness-50"
                style={{ backgroundImage: `url(${CDN_URI + poster_path})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Movie Details */}
            <div className="absolute  bottom-0 p-4 text-white">
                <h2 className="text-3xl font-bold">{title || original_title}</h2>
                <p className="text-sm opacity-80">{overview.slice(0, 100)}...</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xs bg-gray-800 px-2 py-1 rounded">{release_date}</p>
                    <p className="text-xs bg-yellow-500 px-2 py-1 rounded">{vote_average}⭐</p>
                </div>
                <p className="text-xs mt-2">Votes: {vote_count}</p>
                <p className="text-xs">Language: {original_language.toUpperCase()}</p>
            </div>
        </div>

    );
}

export default MovieCards;
