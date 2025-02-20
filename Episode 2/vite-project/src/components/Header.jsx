import "./Header.css";

const Header = () => {
    return (
        <div id="header">
            <header>
                {/* Left side: Logo */}
                <div className="logo">
                    <img src="https://cdn.pixabay.com/photo/2019/08/06/08/46/old-man-4387774_1280.png" alt="LOGO" />
                </div>

                {/* Center: Search bar and button */}
                <div className="search-container">
                    <input type="text" id="serch" placeholder="Search" />
                    <button>Search</button>
                </div>

                {/* Right side: User Image */}
                <div className="user-img">
                    <img src="https://cdn.pixabay.com/photo/2023/10/27/10/28/woman-8344944_1280.jpg" alt="User" />
                </div>
            </header>
        </div>
    );
};

export default Header;
