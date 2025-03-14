const User =({img,name,location,contactUs})=>{
    return(
       <div className="userCard">
        <div className="img">
            <img src="img" alt="" />
        </div>
        <div className="info">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>{contactUs}</h3>


        </div>
       </div>
    )
}
export default User;