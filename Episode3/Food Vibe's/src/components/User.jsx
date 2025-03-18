const User =({img,name,location,contactUs})=>{
    return (
        <div className="userCard bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image Section */}
          <div className="img">
            <img
              src={img}
              alt="User"
              className="w-full h-48 object-cover"
            />
          </div>
      
          {/* Info Section */}
          <div className="info p-4">
            <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
            <h3 className="text-sm text-gray-600 mt-1">{location}</h3>
            <h3 className="text-sm text-gray-600 mt-1">{contactUs}</h3>
          </div>
        </div>
      );
}
export default User;