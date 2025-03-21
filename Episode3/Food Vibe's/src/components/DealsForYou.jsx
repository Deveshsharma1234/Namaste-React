
import { CDN_URL } from "../utils/constants";
const DealsForYou = ({ offers }) => {
    return <>
        <div className="bg-purple-100 p-4 shadow-md rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">💰 Deals for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {offers.length > 0 ? (
                    offers.map((offer,index) => (
                        <div className="bg-white p-3 shadow-lg rounded-lg flex items-center gap-4" key={offer.info.id||index}>
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


    </>
}
export default DealsForYou;