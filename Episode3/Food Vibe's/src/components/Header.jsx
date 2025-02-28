import { LOGO_URL } from "../utils/constants";
import{useState} from 'react';

const Header =()=>{


  const [log,setLog]=useState("Login");
  const handleLoging =()=>{
    setLog(log==="Login"?"Logout":"Login");
  }
    return(
      <div className = "Header">
        <div className="logoContainer">
          <img className='logo' src={LOGO_URL} alt="logo" />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="log">
          <button className={`log-btn ${log==="Login"?"login-btn":"logout-btn"}`}
           onClick={handleLoging}>{log}</button>
        </div>
  
  
      </div>
    )
  }
  export default Header;