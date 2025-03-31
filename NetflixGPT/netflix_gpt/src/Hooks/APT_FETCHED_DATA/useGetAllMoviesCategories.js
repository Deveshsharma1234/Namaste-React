import { addNowPlayingMovies,addTopRatedMovies,addPopularMovies,addUpComingMovies } from '../../utils/Redux/Slices/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../../utils/constants';
import { useEffect } from 'react';

const useGetAllMoviesCategories = () => {

const dispatch = useDispatch();



const getNowPlayingMovies = async () => {
    let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    res = await res.json();

    // console.log(res)
    dispatch(addNowPlayingMovies(res.results))

}
const getTopRatedMovies = async () => {
    let res = await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", API_OPTIONS);
    res = await res.json();

    // console.log(res)
    dispatch(addTopRatedMovies(res.results))

}
const getPopularMovies = async () => {
    let res = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
    res = await res.json();

    // console.log(res)
    dispatch(addPopularMovies(res.results))

}
const getUpComingMovies = async () => {
    let res = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);
    res = await res.json();

    // console.log(res)
    dispatch(addUpComingMovies(res.results))

}

useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpComingMovies();
}, [])

}

export default useGetAllMoviesCategories;