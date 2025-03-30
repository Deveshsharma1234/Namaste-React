import React, { useEffect, useState } from 'react';
import { headerWithLogin } from './Header';
import Header from './Header';
import useGetAllMoviesCategories from '../Hooks/APT_FETCHED_DATA/useGetAllMoviesCategories';
import FirstContainer from './FirstContainer';
import SecoundContainer from "./SecoundContainer"
const Browse = () => {

  

    const HeaderWithLogin = headerWithLogin(Header);
    const [search, setSearch] = useState("");
console.log("search from browse",search)
   //calling custom hook to store get nowplayingmovies data in redux store
   useGetAllMoviesCategories()



    return (
        <div >
            <HeaderWithLogin setSearch={setSearch} />
            <FirstContainer/>
            <SecoundContainer/>
          

        </div>
    );
}

export default Browse;
