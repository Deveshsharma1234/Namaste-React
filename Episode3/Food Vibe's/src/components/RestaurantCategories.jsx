import { useState } from "react";
import RestaurantCategoriesItems from "./RestaurantCategoriesItems";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RestaurantCategories = ({  isOpen ,category,setShowIndex  }) => {
    // const [isOpen, setIsOpen] = useState(false); i dont want to have its on state i will lift its state up i.e want parent to hadle it
 
  
    return (
        <div className="mb-6 border rounded-lg shadow-md">
            {/* Accordion Header */}
            <div
                className="flex justify-between items-center p-4 bg-pink-50 cursor-pointer"
                onClick={()=>{
                  setShowIndex();
               
                }}
                  
            >
                <h2 className="text-xl font-bold text-gray-800">{category?.card?.card?.title}</h2>
                {isOpen ? <FaChevronUp className="text-purple-700" /> : <FaChevronDown className="text-purple-700" />}
            </div>

            {/* Accordion Body */}
            {isOpen && (
                <div className="p-4 bg-white">
                    {category?.card?.card?.categories?.map((subCategory, index) => (
                        <RestaurantCategoriesItems key={index} subCategory={subCategory} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantCategories;
