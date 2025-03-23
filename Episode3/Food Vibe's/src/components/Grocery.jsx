import userContext from "../utils/userContext";
import { useContext } from "react";

const Grocery = () => {

    const {loggedInUser} = useContext(userContext);
    return <>
    <h1>Welcome To Cart of {loggedInUser} </h1>
        <h1>Welcome to lazy imported grocey Store!!! </h1>
       <center> <h1><b><i>CURRENTLY IN DEVELOPMENT PHASE</i></b></h1></center>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo facere consequuntur a earum quibusdam ad quisquam eaque veniam magni iure! Perspiciatis ipsum non sint a, officiis corrupti perferendis magnam quos maiores, deserunt, unde id vel assumenda. Dolores sed et esse!
        </p>
    </>
}

export default Grocery;