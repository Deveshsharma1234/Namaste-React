import { BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotifications, IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { openHambergerMenu,closeHambergerMenu } from "../redux/slice/toggleSlice";
import { useDispatch } from "react-redux";
import { closeNotification, openNotification } from "../redux/slice/notificatonSlice";
const Header = () => {
    const isHamberOpen = useSelector(state => state.toggle.isHambergerMenuOpen)
    const isNotificatonOpen = useSelector(state => state.notification.isNotificatonOpen)
    const dispatch = useDispatch();
  
    return <>
        <div className="flex items-center justify-between px-10 py-3 bg-white shadow-md top-0 left-0 right-0 z-10 sticky">
            {/* Left Section - Menu and Logo */}
            <div  className="flex items-center gap-4 ">
                <GiHamburgerMenu size={30} className="cursor-pointer" onClick={()=>{
                    isHamberOpen ? dispatch(closeHambergerMenu()): dispatch(openHambergerMenu());
                }}/>
                <div className="flex justify-evenly gap-0.5 ">
                    <BsYoutube size={40} color="red" />
                    <span className="text-2xl font-bold mt-0.5">YouTube</span>
                </div>
            </div>

            {/* Center Section - Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-1/2">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none text-gray-700"
                />
                <IoSearch size={24} className="text-gray-600 cursor-pointer" />
            </div>

            {/* Right Section - Notifications and Profile */}
            <div className="flex items-center gap-4">
                <IoNotifications size={30} className="cursor-pointer text-gray-700"  onClick={()=>{
                    isNotificatonOpen ?  dispatch(closeNotification()):dispatch(openNotification());
                }} />
                <img
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                />
            </div>
        </div>

    </>
}

export default Header;