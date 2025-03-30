import React from 'react';
import { CiCircleInfo, CiPlay1 } from 'react-icons/ci';

const VideoTitle = ({title,desc}) => {
    return (
        <>
  <div className="relative flex flex-col gap-4 text-white w-1/3 max-w-2xl mx-30 mt-20 ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-gray-300 text-lg line-clamp-3">{desc}</p>

      <div className="flex gap-4 mt-4">
        <button className="flex items-center gap-2 text-gray-900 py-3 px-8 text-lg font-semibold rounded-md bg-white hover:bg-gray-200 transition">
          <CiPlay1 size={28} /> Play
        </button>
        <button className="flex items-center gap-2 text-white py-3 px-8 text-lg font-semibold rounded-md bg-gray-800 hover:bg-gray-900 transition">
          <CiCircleInfo size={28} /> More info
        </button>
      </div>
    </div>
        </>
    );
}

export default VideoTitle;
