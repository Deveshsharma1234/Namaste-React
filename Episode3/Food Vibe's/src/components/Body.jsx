
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';
import{useEffect} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from '../utils/mockData';


const Body = () => {
  const [originalData ,setOriginalData] = useState([]); 
    let [filteredList,setFilteredResList] = useState( []);
    let [search , setSearch] = useState("");
    const[res_name_heading, setRes_name_heading] = useState("Wait... ");
    // console.log(filteredList);
    // console.log("HYYYYYYYYYYY"+useState);
    useEffect(()=>{
      console.log("useEffect called");
      fetchData();
     
      // setFilteredResList(originalData);
    },[])
    const fetchData = async()=>{
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
  
 
  const filter = ()=>{
    console.log("Button clicked");  
    const listFilter = originalData.filter(res => res.info.avgRating >4.3);
    console.log("Filtered List:", listFilter);
    setFilteredResList(listFilter);
  }
 const searchRestraunt = ()=>{
    console.log("Button clicked");
    const searchFilter = filteredList.filter(res => res.info.name.toLowerCase().includes(search.toLowerCase()));
    console.log("Filtered List:", searchFilter);
    setFilteredResList(searchFilter);
 }
const handleInputChange = (e)=>{
  console.log(e.target.value);
  
  if(e.target.value ==="")
    setFilteredResList(originalData);
  setSearch(e.target.value);

}
const loader = ()=>{
if (originalData.length === 0) {
  const shimmerElements = [];
  for (let i = 0; i < 10; i++) {
    shimmerElements.push(<Shimmer key={i} />);
  }
  return shimmerElements;
}}

  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" name="" id=""   onChange={handleInputChange}/>
        <button type="button" onClick={searchRestraunt}>search</button>
        <div className="filter">
          <button type="button" className='filter-btn' onClick={ filter
       /*   ()=>{
              console.log  ( "Button clickeds")
             
               let listfilter  =  [...resList].filter((res)=>res.info.avgRating > 4);
              console.log(listfilter);
              setFilteredResList(listfilter);
                }*/
                
          }>Top-Rated-Restraunt</button>

        </div>
      </div>
     


      <div className="res-container">
        <div className="res-container-heading">
          <h2>{res_name_heading}</h2>
        </div>
      {loader()}
        {  filteredList.map((res) => {

          return (
            <Link  key={res.info.id} to={"/restraunts/"+res.info.id}><RestaurantCard
           
            restData={res}
          /></Link>
          )

        })}
        {/* {
          resList.filter((res) =>
            res.info.avgRating > 4).map((rs) => {
              return (
                <ReastrauntCard
                  key={rs.info.id} 
                  restData={rs}
                />
              )
            })
        } */}


        {/* <ReastrauntCard
          restData = {resList[0]}
            />
            <ReastrauntCard
          restData = {resList[1]}
            />
            <ReastrauntCard
          restData = {resList[3]}
            />
            <ReastrauntCard
          restData = {resList[5]}
            /> */}
        {/* <ReastrauntCard 
    img="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" 
    name="Meghna Foods" 
    cusine="Indian, Chinese, South Indian" 
    rating="4.5" 
    star="⭐⭐⭐⭐⭐"
    avgPrice="₹200 for one" 
  />
         
  <ReastrauntCard 
    img="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
    name="Spicy Grill" 
    cusine="BBQ, American, Steakhouse" 
    rating="4.2" 
    star="⭐⭐⭐⭐" 
    avgPrice="₹350 for one" 
  />
  
  
  <ReastrauntCard 
    img="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" 
    name="The Italian Bistro" 
    cusine="Italian, Pasta, Pizza" 
    rating="4.6" 
    star="⭐⭐⭐⭐⭐" 
    avgPrice="₹400 for one" 
  />
  <ReastrauntCard 
    img="https://www.foodiesfeed.com/wp-content/uploads/2023/12/cutting-pizza.jpg" 
    name="Vegan Paradise" 
    cusine="Vegan, Organic, Healthy" 
    rating="4.3" 
    star="⭐⭐⭐⭐" 
    avgPrice="₹250 for one" 
  />
          <ReastrauntCard 
    img="https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg" 
    name="Golden Dragon" 
    cusine="Chinese, Thai, Asian" 
    rating="4.7" 
    star="⭐⭐⭐⭐⭐" 
    avgPrice="₹300 for one" 
  />
  
  <ReastrauntCard 
    img="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" 
    name="Royal Biryani House" 
    cusine="Indian, Mughlai, Biryani" 
    rating="4.5" 
    star="⭐⭐⭐⭐" 
    avgPrice="₹250 for one" 
  />
  
  <ReastrauntCard 
    img="https://images.pexels.com/photos/6752433/pexels-photo-6752433.jpeg" 
    name="Mexican Fiesta" 
    cusine="Mexican, Tacos, Burritos" 
    rating="4.6" 
    star="⭐⭐⭐⭐⭐" 
    avgPrice="₹350 for one" 
  />
  
  <ReastrauntCard 
    img="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg" 
    name="Sunset Café" 
    cusine="Café, Continental, Desserts" 
    rating="4.4" 
    star="⭐⭐⭐⭐" 
    avgPrice="₹200 for one" 
  />
  
  <ReastrauntCard 
    img="https://images.pexels.com/photos/2087740/pexels-photo-2087740.jpeg" 
    name="BBQ Nation" 
    cusine="BBQ, Grilled, Smoked" 
    rating="4.8" 
    star="⭐⭐⭐⭐⭐" 
    avgPrice="₹500 for one" 
  /> */}


      </div>
    </div>
  )
}






export default Body;  


// import RestaurantCard from './RestaurantCard';
// import { useState } from 'react';
// import resList from '../utils/mockData';

// const Body = () => {
//   const [filteredList, setFilteredList] = useState(resList);

//   const handleFilter = () => {
//     console.log("Button clicked");
//     const listFilter = resList.filter((res) => res.info.avgRating > 4);
//     setFilteredList(listFilter);
//   };

//   return (
//     <div className="body">
//       <div className="search-bar">
//         <input type="text" placeholder="Search for a restaurant..." />
//         <button type="button">Search</button>
//         <div className="filter">
//           <button type="button" className="filter-btn" onClick={handleFilter}>
//             Top-Rated Restaurants
//           </button>
//         </div>
//       </div>

//       <div className="res-container">
//         {filteredList.length > 0 ? (
//           filteredList.map((res) => (
//             <RestaurantCard key={res.info.id} restData={res} />
//           ))
//         ) : (
//           <p>No restaurants found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Body;
// import { useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";

// const Body = () => {
//   const [allRestaurants, setAllRestaurants] = useState(resList); // Store original data
//   const [filteredList, setFilteredList] = useState(resList);

//   const handleFilter = () => {
//     console.log("Button clicked"); // Debugging
//     const listFilter = allRestaurants.filter((res) => res.info.avgRating > 4);
//     console.log("Filtered List:", listFilter); // Check if filtering works
//     setFilteredList(listFilter);
//   };

//   return (
//     <div className="body">
//       <div className="search-bar">
//         <input type="text" placeholder="Search for a restaurant..." />
//         <button type="button">Search</button>
//         <div className="filter">
//           <button type="button" className="filter-btn" onClick={handleFilter}>
//             Top-Rated Restaurants
//           </button>
//         </div>
//       </div>

//       <div className="res-container">
//         {filteredList.length > 0 ? (
//           filteredList.map((res) => <RestaurantCard key={res.info.id} restData={res} />)
//         ) : (
//           <p>No restaurants found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Body;
