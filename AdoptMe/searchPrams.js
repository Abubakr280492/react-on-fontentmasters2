import React, {useState, useEffect}from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results'; 

const SearchParams = () => {

    // you cant use hooks inside if 
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown ("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed ] = useDropdown("Breed", "", breeds);
    cosnt [PermissionStatus, setPets] = useState([]);

    async function requestPets(){   //gurantee return a promise 
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal
        })
//han


        setPets(animals || []);

    }
    
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
            <form onSubmit = {(e) =>{
                e.preventDefault(); 
                requestPets();
            }
            }></form>
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
            <Results pets ={pets  } />

        </div>
    );
};