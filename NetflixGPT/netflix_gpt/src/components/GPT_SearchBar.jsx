import React, { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import client from "../utils/OpenAI/openAI"
import { API_OPTIONS } from '../utils/constants';
import { debugErrorMap } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addGptRecomendedMovies } from '../utils/Redux/Slices/gptSlice';
const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);

    //Search movie in tmdb;
    const searchMovieInTmdb = async(movieName)=>{
        const movieData = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      const movieJSON = await movieData.json();
      return movieJSON.results;
    }

    const handleGPTSearch = async()=>{
        console.log(searchText.current.value);
        // make an api call to get the response from the GPT
        let query = `Work as a movie recomendation system and provide 5 comma separated movie names based on ${searchText.current.value}`
        // const completion = await client.chat.completions.create({
        //     // model: 'gpt-3.5-turbo',
        //     model: 'gpt-4o',
        //     messages: [
        //       { role: 'developer', content: query },
             
        //     ],
        //   });
        //   completion.choices[0].message.content = "Andaz Apna Apna,Hera Pheri,Chupke Chupke";
          
        //   console.log(completion.choices[0].message.content);
          //this will give array of movie using split(',')
        //   const gptMovies = completion.choices[0].message.content.split(',')
        const gptMovies = "Andaz Apna Apna,Hera Pheri,Chupke Chupke".split(`,`);
        //   console.log(gptMovies);

          //for each movie i will call tmdb api
          const gptMoviesPromise   = gptMovies.map((movie)=>{
            const movieData =  searchMovieInTmdb(movie);
            // console.log(movieData);
            return movieData
          })
        //   [promise , promise, promise....]
        const tmdbMovies = await Promise.all(gptMoviesPromise);
        console.log(tmdbMovies);
        dispatch(addGptRecomendedMovies(tmdbMovies));




    }
    return (
        <form  onSubmit={e=> e.preventDefault()} className="flex items-center max-w-lg  p-4 ">
            {/* <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 pl-10 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="absolute left-3 top-2.5 text-gray-500">
                    🔍
                </span>
            </div>
            <button                type="submit"
                className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
                Search
            </button> */}

            {/* ------------------------------------- */}
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1">
                <input
                ref={searchText}

                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="bg-transparent outline-none text-white placeholder-gray-400 px-2"
                />
                <button type='submit' className="text-purple-400 hover:text-white" onClick={handleGPTSearch}>
                    <CiSearch size={20} />
                </button>
            </div>
        </form>
    );
};

export default GPTSearchBar;