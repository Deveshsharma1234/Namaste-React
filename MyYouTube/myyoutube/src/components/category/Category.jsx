import React from 'react';

const Category = ({category}) => {
    return (
        <div className="bg-gray-400 rounded-2xl px-4 py-2 w-fit  cursor-pointer hover:bg-gray-500 transition flex justify-center items-center">
        <span className="text-white font-medium block">{category}</span>
      </div>
      
    );
}

export default Category;
