import React, { useEffect, useState } from 'react';
import { headerWithLogin } from './Header';
import Header from './Header';
import useGetNowPlayingMovies from '../Hooks/APT_FETCHED_DATA/useGetNowPlayingMovies';
import FirstContainer from './FirstContainer';
import SecoundContainer from "./SecoundContainer"
const Browse = () => {

  

    const HeaderWithLogin = headerWithLogin(Header);
    const [search, setSearch] = useState("");

   //calling custom hook to store get nowplayingmovies data in redux store
    useGetNowPlayingMovies()



    return (
        <div>
            <HeaderWithLogin setSearch={setSearch} />
            <FirstContainer/>
            <SecoundContainer/>
          

        </div>
    );
}

export default Browse;
