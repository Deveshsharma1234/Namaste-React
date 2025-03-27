import React from 'react';
import { headerWithLogin } from './Header';
import Header from './Header';


const Browse = () => {

    const HeaderWithLogin = headerWithLogin(Header);
    return (
        <div>
            <HeaderWithLogin/>
            Browse


        </div>
    );
}

export default Browse;
