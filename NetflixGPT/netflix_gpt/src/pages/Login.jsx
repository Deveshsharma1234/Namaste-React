import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const Login = () => {
    const[isSignInForm,setIsSignInForm] = useState(true)

    const toggleSignIn =()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="relative h-screen w-full">
            {/* Header */}
            <Header />

            {/* Background Image with Tailwind */}
            <div className="absolute inset-0 w-full h-full ">
               <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg" alt="backgorund" />
            </div>

            {/* Login Form */}
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-black bg-opacity-50   p-8 rounded-lg shadow-lg w-1/3 max-w-md text-white">
                <h2 className="text-2xl font-bold mb-6 bg-transparent">{isSignInForm ? "Sign In": "Sign Up"}</h2>
                {!isSignInForm && <input type="text" placeholder="Name" className="p-3 mb-4 w-full bg-gray-700 text-white rounded-lg outline-none"/> }
                <input type="text" placeholder="Email Address" className="p-3 mb-4 w-full bg-gray-700 text-white rounded-lg outline-none"/>
                <input type="password" placeholder="Password" className="p-3 mb-4 w-full bg-gray-700 text-white rounded-lg outline-none"/>
                <button className="bg-red-600 hover:bg-red-700 transition-all text-white p-3 w-full rounded-lg font-semibold">Sign In</button>
                
                <p className="text-sm mt-4 text-gray-400 text-center" onClick={toggleSignIn}>
                    {isSignInForm? "New to Netflix?": "Already Registered Sign in "}? <span className="text-white hover:underline cursor-pointer"> {isSignInForm ? "Sign Up Now" : "Sign In Now"}</span>
                </p>
            </form>
        </div>
    );
}

export default Login;
