import React, {useState}from 'react';
import {ANIMALS} from '@frontendmasters/pet';
const SearchParams = () => {

    // you cant use hooks inside if 
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);
    
    // all hooks begins with use 

    return(
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} 
                    placeholder="Location"
                    onChange={e=> setLocation(e.target.value)}/>  
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal"
                    value ={animal}
                    onChange={e => setAnimal(e.target.value)}
                    onBlur= {e=>setAnimal(e.target.value)}>
                        <option>All</option>
                    {ANIMALS.map(animal => (
                         <option value={animal}>{animal}</option>))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select id="breed"
                    value ={breed}
                    onChange={e => setBreed(e.target.value)}
                    onBlur= {e=>setBreed(e.target.value)}
                    disabled={!breeds.length ===0}
                    >
                        <option>All</option>
                    {breeds.map(breedString => (
                         <option key={breedString}
                         value={breedString}>
                             {breedString}
                             </option>))}
                    </select>
                </label>
                <button>Submit</button>
            </form>

        </div>
    );
};