import React from 'react';
import Login from './Login';
import Browse from '../components/Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';



// import { useNavigate } from 'react-router-dom';







const Body = () => {

  
    // const navigate =useNavigate();
    
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/browse",
            element:<Browse/>
        },
   
    ])




    return (
        <div>
      <RouterProvider router={router}/>
        </div>
    );
}


export default Body;
