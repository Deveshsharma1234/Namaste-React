import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    return(

        <div className="error">
            <h1>😆</h1>
            <h1>Opps!!!!</h1>
            <h2>Something Went Worng!😂</h2>
            <h2>{error.data}</h2>
            <p>Status: {error.status}</p>
        </div>
    )
}
export default Error;