import React from 'react';
import SideBar from '../components/SideBar';
import { useSelector } from 'react-redux';
import CategoryContainer from '../components/category/CategoryContainer';
const Home = () => {
    const isHambergerMenuOpen = useSelector(state => state.toggle.isHambergerMenuOpen)
    console.log(isHambergerMenuOpen,"From home notification")
    return (
        <div className="flex flex-col items-center  min-h-screen  bg-gray-100 ">
        {/* Sidebar (Visible when isHambergerMenuOpen is true) */}
       <SideBar />
      
        {/* Category Container */}
        <div className="w-full max-w-6xl">
          <CategoryContainer />
        </div>
      
        {/* Text Content */}
        <p className="text-lg font-semibold text-gray-800 mt-4">Hello From Home</p>
      </div>
      
    );
}

export default Home;
