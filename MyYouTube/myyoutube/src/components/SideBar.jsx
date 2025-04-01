import React from 'react';
import { CgProfile } from 'react-icons/cg';
import {  ImHome3 } from 'react-icons/im';
import { MdSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { useSelector } from 'react-redux';

const SideBar = () => {
    
    return (
        <div className="flex w-fit flex-col border-2 border-gray-300 text-center p-3 space-y-4 bg-white shadow-md rounded-lg h-screen fixed left-0 ">
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500"> 
          <ImHome3 size={25} />
          <label className="text-sm font-medium">Home</label>
        </div>
      
        <div className="flex flex-col items-center cursor-pointer hover:text-red-500">
          <SiYoutubeshorts size={25} />
          <label className="text-sm font-medium">Shorts</label>
        </div>
      
        <div className="flex flex-col items-center cursor-pointer hover:text-green-500">
          <MdSubscriptions size={25} />
          <label className="text-sm font-medium">Subscriptions</label>
        </div>
      
        <div className="flex flex-col items-center cursor-pointer hover:text-purple-500">
          <CgProfile size={25} />
          <label className="text-sm font-medium">You</label>
        </div>
      </div>
      
    );
}

export default SideBar;
