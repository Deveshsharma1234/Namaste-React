import React from "react";
import ReactDOM from "react-dom/client";

const test =  ()=>{
// const heading = React.createElement("h1", {id : "heading"}, "Hello, world!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const jsxHeading = <h1>Namaste react in jsx</h1>;
// console.log(jsxHeading);
const jsxHeading = <h >Hy this is rendered by jsx and this is jsx element</h>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);


}
export default test;        