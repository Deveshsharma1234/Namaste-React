import { LOGO_URL } from "../utils/constants";
import{useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import {useOnlineStatus} from '../utils/useOnlineStatus';
const Header =()=>{


  const [log,setLog]=useState("Login");
 

  useEffect(()=>{
  //  setCount(count+1) ;

    console.log("Inside the use Effect of header")


  },[]);

  const handleLoging =()=>{
    setLog(log==="Login"?"Logout":"Login");
  }
  const isOnline = useOnlineStatus();


    return(
      <div className = "Header">
        <div className="logoContainer">
          <img className='logo' src={LOGO_URL} alt="logo" />
        </div>
  
        <div className="nav-items">
          <ul>
         
            <li >Online Statue :{isOnline ? "😇": "😠"}</li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about-us"}>About-us</Link></li>
            <li><Link to={"/contact-us"}>Contact</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
            <li><Link to={"/grocery"}>grocery</Link></li>
          </ul>
        </div>
        <div className="log">
          <button className={`log-btn ${log==="Login"?"login-btn":"logout-btn"}`} 
           onClick={handleLoging}>
            <Link to={"/about-us"}>{log}</Link>
           </button>
        </div>
  
  
      </div>
    )
  }
  export default Header;