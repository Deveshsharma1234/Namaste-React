
let clicked =true ;
var btn = function(){
 
    console.log("clicked");
    if(clicked){
        root.render(parent);
        console.log(document.getElementById(`root`));
        
    }
    if(!clicked){
        root.render(heading);
        console.log(document.getElementById(`root`));
    }
    clicked = !clicked;
   
} 
const parent = React.createElement(`div`,{id : "parent"},React.createElement(`div`,{id :"child"},[React.createElement(`h1`,{id:`n`},`Hello,Dojo! from nested parent div`),React.createElement(`h2`,{id:`n`},`Things I need to do:`),React.createElement(`ul`,{id:`n`},[React.createElement(`li`,{id:`n`},`Learn React`),React.createElement(`li`,{id:`n`},`Climb Mt.Everest`),React.createElement(`li`,{id:`n`},`Run a marathon`),React.createElement(`li`,{id:`n`},`Feed the dogs`)]),React.createElement(`h1`,{id:`n`},`Hello,Dojo! from nested parent div`)]));
const button = React.createElement(`button`,{id:"btn" ,onClick :btn},`click me`);
const root2 = ReactDOM.createRoot(document.getElementById(`root2`));


const heading = React.createElement(`h1`,{id : "heading"},`Hello,Dojo!`);
const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(heading);
// root.render(parent);
root2.render(button);
// console.log(heading);
console.log(document.getElementById(`root`));
