import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <div className="error flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
          <h1 className="text-8xl mb-4">😆</h1>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Opps!!!!</h1>
          <h2 className="text-2xl text-gray-600 mb-4">Something Went Wrong!😂</h2>
          <h2 className="text-xl text-gray-700 mb-2">{error.data}</h2>
          <p className="text-lg text-gray-600">Status: {error.status}</p>
        </div>
      );
}
export default Error;