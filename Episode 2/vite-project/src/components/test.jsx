import React from "react";
import ReactDOM from "react-dom/client";

const test =  ()=>{
const heading = React.createElement("h1", {id : "heading"}, "Hello, world!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxHeading = <h1>Namaste react in jsx</h1>;
console.log(jsxHeading);
}
export default test;        