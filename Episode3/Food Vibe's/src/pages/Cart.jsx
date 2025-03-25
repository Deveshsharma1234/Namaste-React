import CartItems from "../components/CartItems"
import { useDispatch } from "react-redux"
import { clearItem } from "../utils/redux/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const ItemsList = useSelector((state) => state.cart.items)
    console.log("Hi from cart", ItemsList);





    return (

        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        {ItemsList.length > 0 ? (
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 mb-6 text-lg"
            onClick={() => {
              dispatch(clearItem());
            }}
          >
            Clear Cart
          </button>
        ) : null}
      
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md ">
          <CartItems />
      
          <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4 mt-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Total: 
              <span className="text-green-600 ml-2">
                ₹{ItemsList.reduce(
                  (total, item) =>
                    total + ((item.card.info.price ?? item.card.info.finalPrice ?? item.card.info.defaultPrice) / 100),
0
                ).toFixed(2)}
              </span>

             { ItemsList.length===0?null:<button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 m-3">Payement</button>}
            </h2>
          </div>
        </div>
      </div>
      
    );
}

export default Cart