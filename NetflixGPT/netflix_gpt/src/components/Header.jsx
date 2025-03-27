import React from 'react';
import { CiLogout, CiSearch } from "react-icons/ci";
import { auth } from '../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Swal from "sweetalert2";

const Header = () => {

    return (
        <div className=" px-8 py-2 bg-gradient-to-b from-black z-10 sticky top-0">
            <img
                className="w-44"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Logo"
            />
        </div>
    );
}


export const headerWithLogin = (Header) => {
    const navigate = useNavigate();
    return () => {
        return <>
            <ToastContainer />
            <div className="flex items-center justify-between bg-gray-900 text-white p-4 top-0 w-full z-10 sticky">
                {/* Header */}
                <Header />


                {/* Navigation Links */}
                <ul className="flex gap-6 text-lg">
                    <li className="hover:text-purple-400 cursor-pointer">Home</li>
                    <li className="hover:text-purple-400 cursor-pointer">Service</li>
                    <li className="hover:text-purple-400 cursor-pointer">Movies</li>
                    <li className="hover:text-purple-400 cursor-pointer">Original</li>
                    <li className="hover:text-purple-400 cursor-pointer">Recently Added</li>
                    <li className="hover:text-purple-400 cursor-pointer">My List</li>
                </ul>

                {/* Search Box */}
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="bg-transparent outline-none text-white placeholder-gray-400 px-2"
                    />
                    <button className="text-purple-400 hover:text-white ">
                        <CiSearch size={20} />
                    </button>
                    {/* Logout Button */}

                </div>
                <button className="text-red-400 hover:text-white p-2 rounded-lg" onClick={() => {

                    Swal.fire({
                        title: "Are you sure?",
                        text: "You will be logged out!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, Logout!",
                        confirmButtonColor: "#d33",
                        cancelButtonText: "Cancel",
                        cancelButtonColor: "#3085d6"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Perform logout action

                            signOut(auth).then(() => {
                                // Sign-out successful.
                                console.log("Sign out successful");

                                toast.success("Logging out..", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                })


                            }).catch((error) => {
                                // An error happened.
                            });
                            Swal.fire("Logged out!", "You have been logged out.", "success");
                        }
                    });




                }}>
                    <CiLogout size={24} />
                </button>


            </div>
        </>

    }

}

export default Header;
