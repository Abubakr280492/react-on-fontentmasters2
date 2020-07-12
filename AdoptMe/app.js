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


import React, {useState} from "react";
import{render} from "react-dom";
import {Router , Link} from "@reach/router";
import SearchParams from "./searchPrams";
import Details from "./Details";
import ThemeContext from './ThemeContext'

const App =()=>{
    
    const themeHook = useState('darkblue');

    return(
    
    <React.StrictMode>
        <ThemeContext.Provider value={themeHook}>
            <div>
                <header>
                 <link to="/">
                    Adopt Me!
                 </link>
                </header>
                <Router>
                    <SearchParams/>
                    <Details path="/details/:id" />
                </Router>
            </div>
        </ThemeContext.Provider>
    </React.StrictMode>
    );
};

export default SearchParams; s