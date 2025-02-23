
import { CDN_URL } from "../utils/constants";
const ReastrauntCard = (props)=>{


    console.log(props)
  
    return(
      <div className="res-card">
        <div className="res-cont">
        <img    
    src={ CDN_URL+`${props.restData.info.cloudinaryImageId}`} 
    alt="Restaurant" 
    onError={(e) => e.target.src = "https://via.placeholder.com/150"} // Fallback image
  />  
  
        </div>
        <div className="res-info">
        <h2 className='res-name'>{props.restData.info.name}</h2>
          <p className='cusine'>{props.restData.info.cuisines.join(", ")}</p>
          <p className='res-rating'>{props.restData.info.avgRating} ⭐⭐⭐⭐⭐</p>
          <p className='avg-price'>{props.restData.info.costForTwo}</p>
          </div>
      </div>
    )
  
  }
    export default ReastrauntCard;