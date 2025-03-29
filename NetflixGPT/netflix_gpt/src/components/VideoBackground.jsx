import {  useSelector } from 'react-redux';
import useGetBackgroundTrailer from '../Hooks/APT_FETCHED_DATA/useGetBackgroundTrailer';


const VideoBackground = ({ id }) => {
 
    useGetBackgroundTrailer(id);
    const key = useSelector((state)=> state?.movie?.trailer?.key)



    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        {key && (
          <iframe
            className="w-full h-full absolute top-0 left-0 object-cover"
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&playlist=${key}&controls=0&showinfo=0&modestbranding=0`}
            title="YouTube video player"
            allow="autoplay; encrypted-media; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        )}
      </div>
    );
}

export default VideoBackground;
