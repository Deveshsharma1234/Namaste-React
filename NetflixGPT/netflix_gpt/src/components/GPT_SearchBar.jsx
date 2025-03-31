import React, { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';

import { useDispatch } from 'react-redux';
import { addGptRecomendedMovies } from '../utils/Redux/Slices/gptSlice';
import { searchMovieInTmdb } from '../Hooks/APT_FETCHED_DATA/searchMovieInTmdb';

const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    // const searchMovieInTmdb = async(movieName)=>{
    //     const movieData = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    //   const movieJSON = await movieData.json();
    //   return movieJSON.results;
    // }
    const handleGPTSearch = async()=>{
   
        // make an api call to get the response from the GPT
        // let query = `Work as a movie recomendation system and provide 5 comma separated movie names based on ${searchText.current.value}`
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
        const gptMovies = "Andaz Apna Apna,Hera Pheri,Chupke Chupke".split(`,`)
        // const gptMovies = "Andaz Apna Apna,Hera Pheri,Chupke Chupke,Dhol,Bhagam Bhag,Golmaal,Fukrey,Welcome,3 Idiots,Dhamaal,Phir Hera Pheri,Golmaal Returns,Golmaal 3,Malamaal Weekly,De Dana Dan,Chennai Express,Bol Bachchan,Housefull,Housefull 2,Housefull 3,Housefull 4,Partner,No Entry,Heyy Babyy,Total Dhamaal,Mujhse Shaadi Karogi,Judwaa,Judwaa 2,Main Tera Hero,Badlapur,PK,Lage Raho Munna Bhai,Munna Bhai MBBS,Bhool Bhulaiyaa,Bhool Bhulaiyaa 2,Khatta Meetha,Tees Maar Khan,Desi Boyz,Dostana,Dostana 2,Garam Masala,Mr. India,Sholay,Don,Don 2,Raees,Pathaan,Jawan,War,KGF,Kabir Singh,Animal,Gadar,Gadar 2,Border,Lagaan,Swades,Chak De India,Tanhaji,Bajirao Mastani,Padmaavat,Ram-Leela,Sanju,Rang De Basanti,Zindagi Na Milegi Dobara,Rockstar,Jab We Met,Tamasha,Yeh Jawaani Hai Deewani,Ae Dil Hai Mushkil,Barfi!,Kal Ho Naa Ho,Kabhi Khushi Kabhie Gham,Kabhi Alvida Naa Kehna,Dilwale Dulhania Le Jayenge,Mohabbatein,Kaho Naa Pyaar Hai,Koi Mil Gaya,Krrish,Krrish 3,Bang Bang,Brahmāstra,Ra.One,Robot,2.0,Bhavesh Joshi Superhero,Gangs of Wasseypur,Drishyam,Drishyam 2,Kahaani,Kahaani 2,Special 26,A Wednesday,Article 15,Badla,Andhadhun,Johnny Gaddaar,Gangubai Kathiawadi,Queen,Tanu Weds Manu,Tanu Weds Manu Returns,Bareilly Ki Barfi,Bala,Stree,Luka Chuppi,Mimi".split(`,`);

        // 
        // ;//Hard coded response
        //   console.log(gptMovies);

          //for each movie i will call tmdb api
          const gptMoviesPromise   = gptMovies.map((movie)=>{
            const movieData =  searchMovieInTmdb(movie);
            // console.log(movieData);
            return movieData
          })
        //   [promise , promise, promise....]
        const tmdbMovies = await Promise.all(gptMoviesPromise);
        dispatch(addGptRecomendedMovies(tmdbMovies));
        
        setTimeout(() => {
            console.log(tmdbMovies)
        },5000 );



    }
    return (
        <form  onSubmit={e=> e.preventDefault()} className="flex items-center max-w-lg  p-4 ">
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