import React, { useEffect } from 'react';
import Login from './Login';
import Browse from '../components/Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils//Redux/Slices/userSlice"
import {removeUser} from "../utils//Redux/Slices/userSlice"
// import { useNavigate } from 'react-router-dom';







const Body = () => {

    const dispatch = useDispatch();
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


    //implementin Get the currently signed-in user onAuthStateChanged
    useEffect(()=>{
        //called when evver thaere is   change like login logout 
        //this is like setting up my event listener in browser   
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user

              const uid = user.uid;
              const {email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            //   navigate("/browse")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
            }
          });

    },[])


    return (
        <div>
      <RouterProvider router={router}/>
        </div>
    );
}


export default Body;
