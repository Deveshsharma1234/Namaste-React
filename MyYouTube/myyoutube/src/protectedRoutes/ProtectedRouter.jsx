import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({element }) => {
  
    const isLoggedIn  = useSelector((store)=> store.user.isLoggedIn)
    
    return (isLoggedIn ? element : <Navigate to={"/login"}/>)
}

export default ProtectedRouter;
