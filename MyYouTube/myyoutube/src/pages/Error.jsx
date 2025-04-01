import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
   
    return (
        <div>
            You have entered wrong url please check!!!!!!
      <Link to={"/"}> <h1><b><i>Click to go Home page</i></b></h1></Link>
        </div>
    );
}

export default Error;
