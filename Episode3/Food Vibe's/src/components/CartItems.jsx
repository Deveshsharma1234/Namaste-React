import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";


const CartItems = (props) => {
    const items = useSelector((state) => state.cart.items);//to get items!!!
    console.log("in cartItems : ", items)
    // const{resImageId,resName,resAddress} = props

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                {items.length === 0 && (
                    <Link to={"/"}>
                        <h1 className="text-center text-4xl font-semibold text-gray-700 hover:text-blue-500">
                            Your Cart is empty. Add some dishes. Click me!
                        </h1>
                    </Link>
                )}
                <div>
                    {items.map((item) => {
                        const { id, imageId, name, price ,isVeg} = item.card.info;
                        return <>
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full gap-1">
                                    <span>{isVeg===1?"🫑":"🟥"}</span>
                                <h2 className="text-lg font-semibold text-gray-800 gap-3">{name}</h2>
                                <div className="flex  gap-4">
                                    <span className="text-green-600 font-bold text-lg">
                                        ₹{((item.card.info.price ?? item.card.info.finalPrice ?? item.card.info.defaultPrice) / 100).toFixed(2)}
                                    </span>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium transition duration-200">
                                        Remove
                                    </button>
                                </div>
                            </div>

                        </>
                    })}
                </div>
            </div>



        </>
    );
}


export default CartItems;