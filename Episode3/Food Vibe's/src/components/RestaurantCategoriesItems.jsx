
import { CDN_URL } from "../utils/constants"



//on the fly destructuring
const RestaurantCategoriesItems =({subCategory})=>{
    return<>
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
                        <p className="text-gray-600 text-sm  line-clamp-3">{item?.card?.info?.description}</p>
                      </div>

                      {/* Image & Add Button */}
                      <div className="flex items-center justify-between mt-3">
                        <img
                          src={CDN_URL + item.card.info.imageId}
                          alt={item.card.info.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <button className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all cursor-pointer">
                          ADD
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
    
    </>
}

export default  RestaurantCategoriesItems;