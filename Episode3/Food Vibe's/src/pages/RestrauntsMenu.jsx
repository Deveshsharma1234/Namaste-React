import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { CDN_URL } from "../utils/constants";
import { data } from "react-router-dom";

import { useParams } from "react-router-dom";   
import { MENU_API } from "../utils/constants";


const RestrauntsMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [search, setSearch] = useState("");
    const{resId} = useParams();
 


    useEffect(() => {
        fetchMenu();
        console.log(resInfo)


    }, [])

    const fetchMenu = async () => {
        //   let menu = await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=466586&catalog_qa=undefined&submitAction=ENTER");
        // let menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=713906&catalog_qa=undefined&submitAction=ENTER#");
        let menu = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        menu = await menu.json();
        console.log(menu);
        setResInfo(menu.data);


    }
    const Loader = () => {
        if (resInfo == null) {
            const shimmerElement = [];
            for (let index = 0; index < 10; index++) {
                shimmerElement.push(<Shimmer key={index} />);

            }
            return shimmerElement;
        }

    }


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
        <div className="menu">

            <div className="res-name">
                {/* {Loader() } */}
                <h2>{name}</h2>
            </div>
            <div className="about">
                <div className="rating">
                    <span>✨{avgRatingString}  ({totalRatingsString})  •{costForTwoMessage}</span>
                    <h4>{cuisines.join(",")}</h4>
                </div>

                <h3><b>Outlet</b>  {areaName}</h3>
                <h3><b>{sla.slaString}</b></h3>
            </div>
            <div className="deals">
                <h3><b>Deals for you</b></h3>
                <div className="deal-box">
                    {offers.length > 0 ? (
                        offers.map((offer) => {
                            return (
                                <>
                                    <div className="deal-card" key={offer.info.id}>
                                        <img src={CDN_URL + offer.info.offerLogo} alt="logo" />
                                        <div className="deal-info">
                                            <h3>{offer.info.header}</h3>
                                            <h4>{offer.info.couponCode || offer.info.description}</h4>
                                        </div>
                                    </div>
                                </>

                            )
                        })) : (
                        <p>No deals available</p>
                    )
                    }
                </div>
            </div>

            <div className="menu-text">
                <h3>৻MENU৲</h3>
                <div className="search">
                    <input type="text" name="" id="" placeholder="Search for dishes" onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(search)

                    }} />
                    <button id="search-dish" onClick={() => {
                        console.log(food)

                    }}>🔍</button>
                </div>

            </div>

            <div className="menu-container">
    {categories.map((category) => (
        <div className="category-section" key={category.card.card.title}>
            {/* Category Title (Main Heading) */}
            <h2 className="category-title">{category?.card?.card?.title}</h2>

            {category?.card?.card?.categories?.map((subCategory) => (
                <div className="subcategory-section" key={subCategory.title}>
                    {/* Sub-category Title (Subheading) */}
                    <h3 className="subcategory-title">{subCategory.title}</h3>

                    {/* Food Item List */}
                    <div className="food-items">
                        {subCategory.itemCards.map((item) => (
                            <div className="menu-item" key={item.card.info.id}>
                                {/* Left - Food Details */}
                                <div className="menu-content">
                                    <h4 className="item-name">{item.card.info.name}</h4>
                                    
                                    <div className="item-price">
                                        <span className="old-price">₹{(item.card.info.defaultPrice / 100).toFixed(2)}</span>
                                        <span className="new-price">₹{(item.card.info.price / 100).toFixed(2)}</span>
                                    </div>
                                    <p className="item-desc">{item?.card?.info?.description}</p>
                                </div>

                                {/* Right - Image & Add Button */}
                                <div className="menu-img-section">
                                    <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="menu-img" />
                                    <button className="add-btn">ADD</button>
                                    <p className="customizable-text">Customisable</p>
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
    )

}
export default RestrauntsMenu;