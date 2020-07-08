// const Pet = (props) =>{
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed),

//     ]);
// };

//destructuring
// const Pet = (name,animal,breed) =>{
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, name),
//         React.createElement("h2", {}, animal),
//         React.createElement("h2", {}, breed),

//     ]);
// };

// const App =() =>{
//     return React.createElement(
//         "div",
//         { id: "SOMT-imp"},
//         [
//         React.createElement("h1",{},"Adopt Me!"),
//         React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "havanese"}),
//         React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Cockatiel"}),
//         React.createElement(Pet, {name: "Doink", animal: "Cat", breed: "Mixed"})


//         ]);
// };

// ReactDOM.render(
//     React.createElemnt(App),
//     document.getElementById("root")
// );  


import React from "react";
import{render} from "react-dom";
import SearchParams from "./searchPrams";

const App =()=>{
    return(
        <div>
            <h1 id="something-imoirtant">Adopt Me!</h1>
            <SearchParams/>
        </div>
    );
};

export default SearchParams; 