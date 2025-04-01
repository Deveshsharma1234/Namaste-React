import React from 'react';
import { categoriesDummyData } from '../../utils/dummyData';
import Category from './Category';
import { IoHandLeft } from 'react-icons/io5';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';


const CategoryContainer = () => {
    return (
           <>
           <div className='flex items-center space-x-2'>
           <ImArrowLeft/>
        <div className="w-full overflow-x-auto whitespace-nowrap p-4 flex space-x-3 scrollbar-hide rounded-2xl">

        {categoriesDummyData.map((category, index) => (
          <Category key={index} category={category.name} />
        ))}
      </div>
      <ImArrowRight/>
           </div>
          </>
      
      
    );
}

export default CategoryContainer;
