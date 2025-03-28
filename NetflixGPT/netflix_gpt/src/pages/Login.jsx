import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { checkValidData } from '../utils/validate';
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";//from firebase
import { auth } from '..//utils/firebaseConfig';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();


    const toggleSignIn = () => setIsSignInForm(!isSignInForm);

    const handleClick = () => {
        //Validate the form data
        const isValid = checkValidData(name.current?.value || "", email.current.value, password.current.value, isSignInForm)
        if (isValid) {
            toast.error(isValid, {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark"
            });
            return;
        }

        // toast.success(`${isSignInForm ? "Sign In" : "Sign Up"} successful!`, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     theme: "Dark"
        // });

        console.log("Form submitted successfully!");
        // Logic of sign in and sign up
        //for SignUp
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://i.pravatar.cc/300"
                    }).then(() => {
                        // Profile updated!
                        // ...
                        console.log("Profile updated!")
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        console.log(error)
                    });
                    toast.success("Sign Up as" + user.displayName + "is Succesfull", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",


                    })
                    console.log(user)
                    setTimeout(() => {
                        navigate("/browse")
                    }, 3000);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage, {
                        position: "top-right",
                        autoClose: 6000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark"
                    });
                    console.log(errorCode, errorMessage)
                });


        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    //here we save user in redux store

                    toast.success("Sign in as" + user.email + "is Succesfull", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        pauseOnHover: true,
                        draggable: 'touch',
                        theme: "dark"

                    })
                    //navigate in Body.jsx using onAuthStateChanged
                    setTimeout(() => {
                        navigate("/browse")
                    }, 6000);


                }
                )
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        pauseOnHover: true,
                        draggable: 'touch',
                        theme: "dark"

                    })
                });
        }

    }
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Header */}
            <Header />
            <ToastContainer />

            {/* Background Image with Tailwind */}
            <div className="absolute inset-0 w-full h-full ">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg" alt="backgorund" />
            </div>

            {/* Login Form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-black bg-opacity-50   p-8 rounded-lg shadow-lg w-1/3 max-w-md text-white">
                <h2 className="text-2xl font-bold mb-6 bg-transparent">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-3 mb-4 w-full bg-gray-700 text-white rounded-lg outline-none" />}
                <input ref={email} type="email" placeholder="Email Address" className="p-3 mb-4 w-full bg-gray-700 text-white rounded-lg outline-none" />
                <input ref={password} type="password" placeholder="Password" className="p-3 mb-4 w-full bg-gray-700 text-white rounded-lg outline-none" />
                <button className="bg-red-600 hover:bg-red-700 duration-300 cursor-pointer transition-all text-white p-3 w-full rounded-lg font-semibold"
                    onClick={handleClick}
                >{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="text-sm mt-4 text-gray-400 text-center" onClick={toggleSignIn}>
                    {isSignInForm ? "New to Netflix?" : "Already Registered Sign in "} <span className="text-white hover:underline cursor-pointer"> {isSignInForm ? "Sign Up Now" : "Sign In Now"}</span>
                </p>
            </form>
        </div>
    );
}

export default Login;
