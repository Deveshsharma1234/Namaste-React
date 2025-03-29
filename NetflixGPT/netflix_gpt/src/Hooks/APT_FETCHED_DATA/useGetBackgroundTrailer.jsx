import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTrailer } from "../../utils/Redux/Slices/movieSlice";
import { useEffect } from "react";


const useGetBackgroundTrailer = (id)=>{
       const dispatch = useDispatch();
       useEffect(() => {

        const fetchTrailer = async () => {
            const trailer = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
            const trailerJson = await trailer.json();
        
            const filterTrailerVides = trailerJson.results.filter((video)=>video.type === "Trailer");
          
            const trailerVideo = filterTrailerVides.length? filterTrailerVides[0]: trailerJson.results[0];
            console.log("trailerVideo : ",trailerVideo);
           dispatch(addTrailer(trailerVideo))
            // setTrailer(trailerVideo);
        }

      fetchTrailer();

    }, [])
}

export default useGetBackgroundTrailer;