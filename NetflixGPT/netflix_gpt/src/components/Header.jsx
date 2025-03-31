
import { CiLogout, CiSearch } from "react-icons/ci";
import { auth } from '../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux"
import { addUser, removeUser } from '../utils/Redux/Slices/userSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { memo, useCallback } from "react";
import { LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';
import { addGpt,removeGpt } from "../utils/Redux/Slices/gptSlice";
import { useRef } from "react";
import {searchMovieInTmdb} from '../Hooks/APT_FETCHED_DATA/searchMovieInTmdb';
import { setSearch } from "../utils/Redux/Slices/searchSlice";



const Header = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    //implementin Get the currently signed-in user onAuthStateChanged
    useEffect(() => {
        //called when evver thaere is   change like login logout 
        //this is like setting up my event listener in browser   
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user

                const uid = user.uid;
                const { email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                const currentPath = window.location.pathname; 

                if (currentPath === "/search") {
                    navigate("/search"); 
                }
               else if(currentPath==="/")
                navigate("/browse")
                
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser())
                navigate("/")
            }
        });
        // Cleanup function
        return () => unsubscribe();
    }, [])


    return (
        <div className=" px-8 py-2 bg-gradient-to-b from-black z-10 sticky top-0">
            <img
                className="w-44"
                src={LOGO}
                alt='logo'
            />
        </div>
    );
}











// export const headerWithLogin = (Header) => {
  
//     const user = useSelector(store => store.user)
//     console.log("usaer from header selector", user)
//     return ({ setSearch }) => {
//         return <>
//             <ToastContainer />
//             <div className="flex items-center justify-between bg-gray-900 text-white p-4 top-0 w-full z-10 sticky">
//                 {/* Header */}
//                 <Header />


//                 {/* Navigation Links */}
//                 <ul className="flex gap-6 text-lg">
//                     <li className="hover:text-purple-400 cursor-pointer">Home</li>
//                     <li className="hover:text-purple-400 cursor-pointer">Service</li>
//                     <li className="hover:text-purple-400 cursor-pointer">Movies</li>
//                     <li className="hover:text-purple-400 cursor-pointer">Original</li>
//                     <li className="hover:text-purple-400 cursor-pointer">Recently Added</li>
//                     <li className="hover:text-purple-400 cursor-pointer">My List</li>
//                 </ul>

//                 {/* Search Box */}
//                 <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1">
//                     <input
//                         type="text"
//                         name="search"
//                         id="search"
//                         placeholder="Search"
//                         className="bg-transparent outline-none text-white placeholder-gray-400 px-2"
//                     />
//                     <button className="text-purple-400 hover:text-white ">
//                         <CiSearch size={20} />
//                     </button>
//                     {/* Logout Button */}

//                 </div>
//                 <div className='flex items-center gap-2'>
//                     <h2>{!user ? "guest" : <img className='w-9 h-10 rounded-b-xl ' src={user.photoURL} alt='userIcon' onClick={() => {
//                         toast.info("Logged in as " + user.displayName, {
//                             position: "top-center",
//                             autoClose: 5000,
//                             hideProgressBar: false,
//                             closeOnClick: true,
//                             pauseOnHover: true,
//                             draggable: true,
//                             theme: "colored"



//                         })
//                     }} />}</h2>
//                     {/* Logout Button */}
//                     <button className="text-red-400 hover:text-white p-2 rounded-lg" onClick={() => {
//                         Swal.fire({
//                             title: "Are you sure?",
//                             text: "You will be logged out!",
//                             icon: "warning",
//                             showCancelButton: true,
//                             confirmButtonText: "Yes, Logout!",
//                             confirmButtonColor: "#d33",
//                             cancelButtonText: "Cancel",
//                             cancelButtonColor: "#3085d6"
//                         }).then((result) => {
//                             if (result.isConfirmed) {
//                                 // Perform logout action

//                                 signOut(auth).then(() => {
//                                     // Sign-out successful.
//                                     console.log("Sign out successful");

//                                     toast.success("Logging out..", {
//                                         position: "top-right",
//                                         autoClose: 5000,
//                                         hideProgressBar: false,
//                                         closeOnClick: true,
//                                         pauseOnHover: true,
//                                         draggable: true,
//                                     })
                                   

//                                 }).catch((error) => {
//                                     // An error happened.
//                                 });
//                                 Swal.fire("Logged out!", "You have been logged out.", "success");
//                             }
//                         });




//                     }}>
//                         <CiLogout size={24} />
//                     </button>
//                 </div>



//             </div>
//         </>

//     }

// }
export const headerWithLogin = (Header) => {
    return memo(() => {
        const user = useSelector((store) => store.user);
        const isTrue = useSelector((store)=> store.gpt.isTrue);
        const dispatch = useDispatch();
        const navigate = useNavigate();

    
        const search = useRef();    
        
     const handleSimpleSearch = async()=>{
        if(search.current?.value===""){
            toast.error("Please enter a search term")   
        }else{
            const movieJson = await searchMovieInTmdb(search.current?.value);
        console.log("Movie JSON:", movieJson);
        dispatch(setSearch(movieJson));
        navigate("/search")
        }
     }

        const handleLogout = useCallback(() => {
            Swal.fire({
                title: "Are you sure?",
                text: "You will be logged out!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Logout!",
                confirmButtonColor: "#d33",
                cancelButtonText: "Cancel",
                cancelButtonColor: "#3085d6",
            }).then((result) => {
                if (result.isConfirmed) {
                    signOut(auth)
                        .then(() => {
                            console.log("Sign out successful");
                            toast.success("Logging out..", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        })
                        .catch((error) => {
                            console.error("Logout error:", error);
                        });
                        
                        Swal.fire("Logged out!", "You have been logged out.", "success");
                    }
                });
            }, []);
            
            const   handleAIRecomendation = ()=>{
                console.log("Before Dispatch - isTrue:", isTrue); // Check current state
                dispatch(isTrue ? removeGpt() : addGpt());
                setTimeout(() => {
                    console.log("After Dispatch - isTrue:", isTrue); // Check updated state
                }, 100); // Allow time for Redux update
            
                
                
            }
            return (
                <>
                <ToastContainer />
                <div className="flex items-center justify-between bg-gray-900 text-white p-4 top-0 w-full z-10 sticky">
                    {/* Header */}
                    <Header />

                    {/* Navigation Links */}
                    <ul className="flex gap-6 text-lg">
                       <Link to={"/browse"}  > <li className="hover:text-purple-400 cursor-pointer">Home</li></Link>
                        <li className="hover:text-purple-400 cursor-pointer">Service</li>
                        <li className="hover:text-purple-400 cursor-pointer" onClick={handleAIRecomendation}>AI recomendation</li>
                        <li className="hover:text-purple-400 cursor-pointer">Original</li>
                        <li className="hover:text-purple-400 cursor-pointer">Recently Added</li>
                        <li className="hover:text-purple-400 cursor-pointer">My List</li>
                    </ul>

                    {/* Search Box */}
                    <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1">
                        <input
                        ref={search}
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="bg-transparent outline-none text-white placeholder-gray-400 px-2"
                        />
                        <button className="text-purple-400 hover:text-white" onClick={handleSimpleSearch}>
                            <CiSearch size={20} />
                        </button>
                    </div>
                    {/* <GPTSearchBar/> */}

                    {/* User Profile & Logout */}
                    <div className="flex items-center gap-2">
                        <h2>
                            {!user ? "guest" : (
                                <img
                                    className="w-9 h-10 rounded-b-xl"
                                    src={user.photoURL}
                                    alt="userIcon"
                                    onClick={() => {
                                        toast.info("Logged in as " + user.displayName, {
                                            position: "top-center",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            theme: "colored",
                                        });
                                    }}
                                />
                            )}
                        </h2>

                        {/* Logout Button */}
                        <button
                            className="text-red-400 hover:text-white p-2 rounded-lg"
                            onClick={handleLogout}
                        >
                            <CiLogout size={24} />
                        </button>
                    </div>
                </div>
            </>
        );
    });
};

export default Header;
