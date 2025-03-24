import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const [log, setLog] = useState("Login");

  useEffect(() => {
    console.log("Inside the useEffect of header");
  }, []);

  const handleLoging = () => {
    setLog(log === "Login" ? "Logout" : "Login");
  };

  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  const cartItems = useSelector((state) => state.cart.items)
  console.log(cartItems)

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      {  /* Logo Section */}
      <Link to={"/"}>
        <div className="flex items-center justify-center relative">
          <div className="relative group">
            <img
              className="w-16 h-16 rounded-full border-2 border-purple-500 shadow-lg transition-transform duration-300 group-hover:scale-110"
              src={LOGO_URL}
              alt="logo"
            />
            {/* Sparkle Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-purple-400 opacity-75"></div>
              <div className="absolute inline-flex h-20 w-20 rounded-full border-2 border-purple-500"></div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex">
        <ul className="flex space-x-6 text-lg">
          <li className="font-semibold">
            Online Status: {isOnline ? "😇" : "😠"}
          </li>
          <li>
            <Link to="/" className="hover:text-purple-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-purple-400 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-purple-400 transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-purple-400 transition duration-300">
              Grocery
            </Link>
          </li>
          <li>

            <Link to="/cart" className="flex hover:text-purple-400 transition duration-300">
              <FaCartShopping className="mx-2 hover:scale-110 transition-transform duration-200" size={30} />
              <div className="text-green-400">{cartItems.length >0 &&cartItems.length}
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-white font-medium">
          {log === "Logout" ? loggedInUser : "First Login"}
        </span>

        {/* Login Button */}
        <Link to="/about-us">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${log === "Login"
                ? "bg-purple-600 hover:bg-purple-500"
                : "bg-red-600 hover:bg-red-500"
              }`}
            onClick={handleLoging}
          >
            {log}
          </button>
        </Link>
      </div>


    </div>
  );
};

export default Header;
