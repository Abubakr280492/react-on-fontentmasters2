import React from 'react';
import Pet from './Pet';

const Results = ({pets })=>{
    retrun (
        //key pattern in react   one way data flow 
        <div className='search'>  
            {pets.length ===0 ? (
            <h1>No pets Found</h1>)
             : (
                 pets.map(pet =>(
                    <Pet 
                    animal= {pet.type}
                    key = {pet.id}
                    name = {pet.anme}
                    breed = {pet.breeds.primary}
                    media ={pet.photos}
                    location = {`${pet.contact.adress.city}, ${pet.contact.address.state}`}
                    id = {pet.id} />
                    ))
             )}
        </div>
    )
}

export default Results;