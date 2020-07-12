import React, {useState, useEffect, useContext}from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results'; 
import ThemeContext from './ThemeContext';
const SearchParams = () => {

    // you cant use hooks inside if 
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown ("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed ] = useDropdown("Breed", "", breeds);
    cosnt [PermissionStatus, setPets] = useState([]);
    cosnt [theme, setTheme] = useContext(ThemeContext);



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
               <label htmlFor="theme">Theme
                <select value={theme}
                onChange= {e=> setTheme(e.target.value)}
                onBlur={e=>setTheme(e.target.value)}
                 >
                     <option value="peru">Peru</option>
                     <option value="darkblue">Dark Blue</option>
                     <option value="modiumorchid">Medium Orchid</option>
                     <option value="cahrtreuse">Chartreuse</option>

                </select>
               </label>
                <button style={{backgroundColor: theme}}>Submist</button>
            </form>
            <Results pets ={pets  } />

        </div>
    );
};