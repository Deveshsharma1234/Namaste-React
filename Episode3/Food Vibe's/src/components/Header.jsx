import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [log, setLog] = useState("Login");

  useEffect(() => {
    console.log("Inside the useEffect of header");
  }, []);

  const handleLoging = () => {
    setLog(log === "Login" ? "Logout" : "Login");
  };

  const isOnline = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-16 h-16 rounded-full" src={LOGO_URL} alt="logo" />
      </div>

      {/* Navigation Items */}
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
            <Link to="/cart" className="hover:text-purple-400 transition duration-300">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-purple-400 transition duration-300">
              Grocery
            </Link>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
            log === "Login"
              ? "bg-purple-600 hover:bg-purple-500"
              : "bg-red-600 hover:bg-red-500"
          }`}
          onClick={handleLoging}
        >
          <Link to="/about-us">{log}</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
