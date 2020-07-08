import React, {useState}from 'react';
import {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';
 

const SearchParams = () => {

    // you cant use hooks inside if 
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown ("Animal", "dog", ANIMALS);
    const [bread, BreedDropdown] = useDropdown("Breed", "", breeds);
    
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

                {/* sherd generic class  */}
               <AnimalDropdown/>
               <BreedDropdown/>
                <button>Submit</button>
            </form>

        </div>
    );
};