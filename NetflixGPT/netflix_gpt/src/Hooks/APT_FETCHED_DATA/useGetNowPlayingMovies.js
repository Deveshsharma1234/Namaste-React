import { addNowPlayingMovies } from '../../utils/Redux/Slices/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../../utils/constants';
import { useEffect } from 'react';

const useGetNowPlayingMovies = () => {

const dispatch = useDispatch();



const getNowPlayingMovies = async () => {
    let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    res = await res.json();

    console.log(res)
    dispatch(addNowPlayingMovies(res.results))

}
useEffect(() => {
    getNowPlayingMovies();
}, [])

}

export default useGetNowPlayingMovies;