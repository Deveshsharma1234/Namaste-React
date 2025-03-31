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
        
            const filterTrailerVideos = trailerJson.results.filter((video)=>video.type === "Trailer");
          
          
        // Pick a random trailer if available, else pick any video
        const trailerVideo =
        filterTrailerVideos.length > 0 
            ? filterTrailerVideos[Math.floor(Math.random() * filterTrailerVideos.length)] 
            : trailerJson.results.length > 0 
            ? trailerJson.results[Math.floor(Math.random() * trailerJson.results.length)] 
            : null;
            // console.log("trailerVideo : ",trailerVideo);
           dispatch(addTrailer(trailerVideo))
            // setTrailer(trailerVideo);
        }

      fetchTrailer();

    }, [])
}

export default useGetBackgroundTrailer;