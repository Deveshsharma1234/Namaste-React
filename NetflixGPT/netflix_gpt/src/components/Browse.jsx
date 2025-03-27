import React, { useState } from 'react';
import { headerWithLogin } from './Header';
import Header from './Header';


const Browse = () => {

    const HeaderWithLogin = headerWithLogin(Header);
    const[search,setSearch] = useState("");
    return (
        <div>
            <HeaderWithLogin setSearch = {setSearch}/>
            Browse


        </div>
    );
}

export default Browse;
