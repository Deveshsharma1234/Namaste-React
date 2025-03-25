import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Contact = ()=>{
    // const userInfo = useSelector((state)=> state.auth    )
    // console.log(userInfo)
    // const {loggedInUser} = useContext(userContext);
    return(
        <>
{/*         
        <div className="contact">
            Hello this is contact  form
            <h1>you can directly send msg or query using form to develeoper  : <b><i> {loggedInUser}</i></b></h1>

        </div>
        <div className="contact">
            Hello this is contact  form
            <h1>you can directly send msg or query using form to develeoper </h1> <h1><b>Using React-Redux Tool Kit  :<i> {userInfo.name}</i></b></h1>

        </div> */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="font-bold text-3xl mb-6">Contact Us</h1>
    <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 sm:w-96">
        <input 
        
            type="text" 
            placeholder="Name" 
            className="w-full p-3 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input 
            type="number" 
            placeholder="Number" 
            className="w-full p-3 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea 
            placeholder="Message" 
            className="w-full p-3 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
        ></textarea>
        <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-md transition duration-300"
        >
            Send Message
        </button>
    </form>
</div>

        </>
    )
}

export default Contact;
