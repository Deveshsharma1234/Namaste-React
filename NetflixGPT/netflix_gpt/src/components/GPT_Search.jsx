import React from 'react';
import GPTSearchBar from './GPT_SearchBar';
import GPTRecomendationMovies from './GPTRecomendationMovies';

const GPTSearch = () => {
    return (
      <>
      <div className="bg-gray-900 text-center flex flex-col items-center py-4">
        <GPTSearchBar />
        <h1 className="text-3xl font-bold text-white mt-2">GPT Recommended Movies</h1>
      </div>
    
      <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center ">
        <GPTRecomendationMovies />
      </div>
    </>
    
    );
};

export default GPTSearch;
