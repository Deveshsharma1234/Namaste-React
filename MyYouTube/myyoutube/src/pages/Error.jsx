import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
   
    return (
        <div>
           ⚠️⚠️⚠️⚠️ Ohhh.. Something wrong ⚠️⚠️⚠️⚠️
      <Link to={"/"}> <h1><b><i>Click to go Home page</i></b></h1></Link>
        </div>
    );
}

export default Error;
