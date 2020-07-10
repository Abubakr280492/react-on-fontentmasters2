import React, {useState, useEffect}from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';
 

const SearchParams = () => {

    // you cant use hooks inside if 
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown ("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed ] = useDropdown("Breed", "", breeds);
    
    // all hooks begins with use 

    //scheduling   show immidiately  
    useEffect(() =>{
     //   pet.breds("dog").then(console.log, console.error);
        setBreeds([]);
        setBreed("");


        pet.breeds(animal).then(({breads}) =>{
        const breedStrings = breeds.map(({name}) => name );
        setBreeds(breedStrings);
        } , console.error);
        // it returns promise 
   
    }, [animal, setBreed, setBreeds]);

    
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