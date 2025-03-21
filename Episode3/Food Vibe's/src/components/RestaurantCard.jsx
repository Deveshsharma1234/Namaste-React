
// import { CDN_URL } from "../utils/constants";
// const ReastrauntCard = (props)=>{


//     console.log(props)
  
//     return(
//       <div className="res-card">
//         <div className="res-cont">
//         <img    
//     src={ CDN_URL+`${props.restData.info.cloudinaryImageId}`} 
//     alt="Restaurant" 
//     onError={(e) => e.target.src = "https://via.placeholder.com/150"} // Fallback image
//   />  
  
//         </div>
//         <div className="res-info">
//         <h2 className='res-name'>{props.restData.info.name}</h2>
//           <p className='cusine'>{props.restData.info.cuisines.join(", ")}</p>
//           <p className='res-rating'>{props.restData.info.avgRating} ⭐⭐⭐⭐⭐</p>
//           <p className='avg-price'>{props.restData.info.costForTwo}</p>
//           </div>
//       </div>
//     )
  
//   }
//     export default ReastrauntCard;



import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restData }) => {
  return (
    <div className="res-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-100">
      <div className="res-cont">
        <img
          src={CDN_URL + restData.info.cloudinaryImageId}
          alt={restData.info.name}
          className="w-full h-48 object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        />
      </div>
      <div className="res-info p-4">
        <h2 className="res-name text-xl font-semibold text-gray-800 truncate">
          {restData.info.name}
        </h2>
        <p className="cusine text-sm text-gray-600 mt-2 truncate">
          {restData.info.cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="res-rating text-sm font-medium text-green-600">
            {restData.info.avgRating} ⭐
          </p>
          <p className="avg-price text-sm text-gray-700">
            {restData.info.costForTwo}
          </p>
        </div>
      </div>
    </div>
  );
};

//Higher order fxn Returning updated restaurant card having Remomended on its
export const withPromotedRestaurantCard = (RestaurantCard)=>{
  return (props)=>{
    // console.log("withPromotedRestaurantCard called",withPromotedRestaurantCard  )
    return<>
    
  <span className="absolute  bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
    Recommended
  </span>
  <RestaurantCard {...props} />
    </>
  }
}

export default RestaurantCard;
