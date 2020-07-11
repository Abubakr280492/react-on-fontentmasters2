import React from "react";
import pet from '@frontendmaster/pet';
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary";


class Details extends React.Component{
    
    state= {loading: true};
    
    componentDidMount(){
        //good for ajax request 
        pet.animal(this.props.id)
        // this.props  immutable you cant change it 
            .then(({animal})=>{
                this.setState({
                    name: animal.name, 
                    animal: animal.type,
                    location: `${animal.contact.adress.city}, ${animal.contact.adress.state}`,
                    description: animal.description,
                    media: animal.media,
                    breed: animal.breeds.primary,
                    loading: false
                });
            }, console.error);
    }
    render(){

        if(this.state.loading){
            return <h1>loading ...</h1>
        }

        const {animal,breed, location,description, name, media} = this.state; 

        return(
            <div className="details">  
                <Carousel media={media}/>
                <div >
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt Me!</button>
                    <p>{descriptio}</p>
                </div>
            </div>
        )
    }
}

export  default  function     DetailsWithErrorBoundary(props){
    return(
        <ErrorBoundary>
            <Details/>
        </ErrorBoundary>
    )
}

//cant use hooks remember 

//npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react
  