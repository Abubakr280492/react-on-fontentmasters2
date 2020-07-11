import React from "react";
import per from '@frontendmaster/pet';

class Details extends React.Component{
    constructor(props){
        super(props);

        Object.assign(oldState, newState)

        this.state = {
            loading: true
        };
    }
    
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

    }
}

export  default     Details;

//cant use hooks remember 