import React, { useState } from 'react';
import { headerWithLogin } from './Header';
import Header from './Header';
import useGetAllMoviesCategories from '../Hooks/APT_FETCHED_DATA/useGetAllMoviesCategories';
import FirstContainer from './FirstContainer';
import SecoundContainer from "./SecoundContainer"
import GPTSearch from './GPT_Search';
import { useSelector } from 'react-redux';


const Browse = () => {
    const isTrue = useSelector(store => store.gpt.isTrue)

    const HeaderWithLogin = headerWithLogin(Header);
    const [search, setSearch] = useState("");
    console.log("search from browse", search)
    //calling custom hook to store get nowplayingmovies data in redux store
    useGetAllMoviesCategories()



    return (
        <div >
            <HeaderWithLogin setSearch={setSearch} />
            {isTrue ? (
                <GPTSearch />
            ) : (
                <>
                    <FirstContainer />
                    <SecoundContainer />
                </>
            )}

        </div>
    );
}

export default Browse;
