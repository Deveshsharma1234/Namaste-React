
import RestaurantCard, { withPromotedRestaurantCard } from "../components/RestaurantCard";
import { useState } from 'react';
import { useEffect } from 'react';
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { useLoader } from "../utils/useLoader";
import userContext from "../utils/userContext";
import { useContext } from "react";
// import resList from '../utils/mockData';


const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  let [filteredList, setFilteredResList] = useState([]);
  let [search, setSearch] = useState("");
  const [res_name_heading, setRes_name_heading] = useState("Wait... ");
  console.log(originalData);
  // console.log("HYYYYYYYYYYY"+useState);
  useEffect(() => {
    console.log("useEffect called");
    fetchData();

    // setFilteredResList(originalData);
  }, [])
  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1249388&lng=75.8654596&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const resJson = await data.json();
    console.log(resJson);
    const dataOriginal = resJson?.data?.cards
      ?.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.find((list) => Array.isArray(list)) || [];
    setOriginalData(dataOriginal);
    setFilteredResList(dataOriginal);
    setRes_name_heading(resJson?.data?.cards[2]?.card?.card?.title)


  }


  const filter = () => {
    console.log("Button clicked");
    const listFilter = originalData.filter(res => res.info.avgRating > 4.3);
    console.log("Filtered List:", listFilter);
    setFilteredResList(listFilter);
  }
  const searchRestraunt = () => {
    console.log("Button clicked");
    const searchFilter = filteredList.filter(res => res.info.name.toLowerCase().includes(search.toLowerCase()));
    console.log("Filtered List:", searchFilter);
    setFilteredResList(searchFilter);
  }
  const handleInputChange = (e) => {
    console.log(e.target.value);

    if (e.target.value === "")
      setFilteredResList(originalData);
    setSearch(e.target.value);

  }
  // const loader = ()=>{
  // if (originalData.length === 0) {
  //   const shimmerElements = [];
  //   for (let i = 0; i < 10; i++) {
  //     shimmerElements.push(<Shimmer key={i} />);
  //   }
  //   return shimmerElements;
  // }}
  const loader = useLoader(originalData.length);
  const PromotedRestaurantCard = withPromotedRestaurantCard(RestaurantCard)//here withPromotedRestarantcard takes restraurat card and lable it with recomended and and retun a fxn to the PromotedRestaurantCard
  const { loggedInUser,setUserInfo } = useContext(userContext);



  return (
    <div className="p-6">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all w-full md:w-1/3"
          placeholder="Search restaurants..."
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={searchRestraunt}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 active:bg-purple-800 transition-all cursor-pointer"
        >
          Search
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition-all"
          onClick={filter}
        >
          Top-Rated Restaurants
        </button>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all w-full md:w-1/3"
          placeholder="Update user name.."
          value={loggedInUser}
          onChange={(e) => {
            console.log(e.target.value);
            setUserInfo(e.target.value);
          }}
        />

      </div>

      {/* Restaurant Cards Section */}
      <div className="res-container">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{res_name_heading}</h2>

        {loader()}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredList.map((res) => (
            <Link key={res.info.id} to={`/restraunts/${res.info.id}`} className="block">
              {/* PromotedRestaurantCard is used as a componed using ternery operator condition */}
              {res.info.avgRating > 4.3 ? (< PromotedRestaurantCard restData={res} />) :

                (<RestaurantCard restData={res} />)
              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

}






export default Body;

