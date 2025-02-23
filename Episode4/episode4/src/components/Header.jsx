import "./Header.css";

const Header = ()=>{
    return(
       <div id="header">
        <div id="header-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHycZOHxIuuimUYIApggJ17SmP9szdXgPziQ&s" alt="logo" srcset="" />
        </div>

        <div id="nav-container">
            <ul>
                <li className="nav-items">Home</li>
                <li className="nav-items">Service</li>
                <li className="nav-items">Products</li>
                <li className="nav-items">Our work</li>
                <li className="nav-items">About us</li>
                <li className="nav-items">Contact us</li>
            </ul>
        </div>
        <div id="site-boot-btn">
            <button>Book a site visit</button>
        </div>
       </div>
    )
}

export default Header;