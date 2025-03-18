import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { CDN_URL } from "../utils/constants";
import { data } from "react-router-dom";

import { useParams } from "react-router-dom";   
import { MENU_API } from "../utils/constants";
import { useRestrauntMenu } from "../utils/useRestrauntMenu";
import { useLoader } from "../utils/useLoader";
import { useOnlineStatus } from "../utils/useOnlineStatus";


const RestrauntsMenu = () => {
   
    const [search, setSearch] = useState("");
    const{resId} = useParams();

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return(
            <div>
                <h1>You are offline Plese check you internet connection!!!</h1>
            </div>
        )
    }
    
    
    // const [resInfo, setResInfo] = useState(null);

    // useEffect(() => {
    //     fetchMenu();
    //     console.log(resInfo)


    // }, [])

    // const fetchMenu = async () => {
    //     //   let menu = await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=466586&catalog_qa=undefined&submitAction=ENTER");
    //     // let menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=713906&catalog_qa=undefined&submitAction=ENTER#");
    //     let menu = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
    //     menu = await menu.json();
    //     console.log(menu);
    //     setResInfo(menu.data);


    // }
    const resInfo = useRestrauntMenu(resId);//creatd custom hook
    // const Loader = () => {
    //     if (resInfo == null) {
    //         const shimmerElement = [];
    //         for (let index = 0; index < 10; index++) {
    //             shimmerElement.push(<Shimmer key={index} />);

    //         }
    //         return shimmerElement;
    //     }

    // }
    const Loader = useLoader(resInfo);//creatd custom hook


    if (!resInfo) {
        return (
            <div className="menu">
                {Loader()}
            </div>
        )
    }



    const { sla, areaName, city, name, costForTwoMessage, avgRatingString, totalRatingsString, cuisines } = resInfo?.cards[2]?.card?.card?.info || "no name available";
    const offers = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];
    const food = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
   
    return (
        <div className="p-6 max-w-5xl mx-auto">
          {/* Restaurant Name */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
          </div>
      
          {/* About Section */}
          <div className="bg-white p-4 shadow-md rounded-lg mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <span className="text-gray-600 text-lg">✨ {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}</span>
              <h4 className="text-gray-700 text-lg">{cuisines.join(", ")}</h4>
            </div>
            <h3 className="text-gray-700"><b>Outlet:</b> {areaName}</h3>
            <h3 className="text-gray-700"><b>{sla.slaString}</b></h3>
          </div>
      
          {/* Deals Section */}
          <div className="bg-purple-100 p-4 shadow-md rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">💰 Deals for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {offers.length > 0 ? (
                offers.map((offer) => (
                  <div className="bg-white p-3 shadow-lg rounded-lg flex items-center gap-4" key={offer.info.id}>
                    <img
                      src={CDN_URL + offer.info.offerLogo}
                      alt="logo"
                      className="w-12 h-12 object-contain rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{offer.info.header}</h3>
                      <h4 className="text-gray-600">{offer.info.couponCode || offer.info.description}</h4>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No deals available</p>
              )}
            </div>
          </div>
      
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-white p-3 shadow-md rounded-lg mb-6">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search for dishes"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
              onClick={() => console.log(food)}
            >
              🔍
            </button>
          </div>
      
          {/* Menu Section */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 text-center mb-4">৻ MENU ৲</h3>
      
            {categories.map((category) => (
              <div key={category.card.card.title} className="mb-6">
                {/* Category Title */}
                <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 mb-4">{category?.card?.card?.title}</h2>
      
                {category?.card?.card?.categories?.map((subCategory) => (
                  <div key={subCategory.title} className="mb-4">
                    {/* Sub-category Title */}
                    <h3 className="text-lg font-semibold text-gray-700">{subCategory.title}</h3>
      
                    {/* Food Items List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subCategory.itemCards.map((item) => (
                        <div key={item.card.info.id} className="bg-gray-100 p-3 rounded-lg shadow-md flex flex-col">
                          {/* Food Item Details */}
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h4>
                            <div className="flex items-center gap-2">
                              <span className="line-through text-gray-500">₹{(item.card.info.defaultPrice / 100).toFixed(2)}</span>
                              <span className="text-green-600 font-bold">₹{(item.card.info.price / 100).toFixed(2)}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{item?.card?.info?.description}</p>
                          </div>
      
                          {/* Image & Add Button */}
                          <div className="flex items-center justify-between mt-3">
                            <img
                              src={CDN_URL + item.card.info.imageId}
                              alt={item.card.info.name}
                              className="w-20 h-20 object-cover rounded-md"
                            />
                            <button className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                              ADD
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
      

}
export default RestrauntsMenu;