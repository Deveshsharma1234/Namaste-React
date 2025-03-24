import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Contact = ()=>{
    const userInfo = useSelector((state)=> state.aut    )
    console.log(userInfo)
    const {loggedInUser} = useContext(userContext);
    return(
        <>
        
        <div className="contact">
            Hello this is contact  form
            <h1>you can directly send msg or query using form to develeoper  : <b><i> {loggedInUser}</i></b></h1>

        </div>
        <div className="contact">
            Hello this is contact  form
            <h1>you can directly send msg or query using form to develeoper </h1> <h1><b>Using React-Redux Tool Kit  :<i> {userInfo.name}</i></b></h1>

        </div>
        <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae dolorem sit temporibus facere, repellendus soluta officia deleniti fuga! Neque exercitationem beatae corporis ea eos. Saepe beatae vitae ratione temporibus maiores cumque voluptas nam ad esse odit! Quo et autem soluta quia a? Esse ipsum similique facere quae cupiditate modi? 
        </div>
        </>
    )
}

export default Contact;
