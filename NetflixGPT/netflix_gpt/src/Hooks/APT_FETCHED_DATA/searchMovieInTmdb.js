
import { API_OPTIONS } from "../../utils/constants";
export  const searchMovieInTmdb = async(movieName)=>{
        const movieData = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      const movieJSON = await movieData.json();
      return movieJSON.results;
    }