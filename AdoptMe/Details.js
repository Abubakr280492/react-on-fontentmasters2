import React from "react";
import pet from '@frontendmaster/pet';
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from './ThemeContext';
import {navigate} from '@reach/router';
import Modal from './modal';

class Details extends React.Component{
    
    state= {loading: true, showModal: false};
    
    componentDidMount(){
        //good for ajax request 
        pet.animal(this.props.id)
        // this.props  immutable you cant change it 
            .then(({animal})=>{
                this.setState({
                    url: animal.url,
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

    toggleModel = () => this.setState({showModal: !this.state.showModal})
    adopt = () => navigate(this.state.url) 
    render(){

        if(this.state.loading){
            return <h1>loading ...</h1>
        }

        const {animal,breed, location,description, name, media, showModal} = this.state; 

        return(
            <div className="details">  
                <Carousel media={media}/>
                <div >
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button onClick={this.toggleModel} style={{backgroundColor: theme }}>Adopt Me!</button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{descriptio}</p>
                    {
                        showModal? (<Modal>
                            <div>
                                <h1>Would you like to adopt {name}? </h1>
                                <div className="buttons">
                                    <button onClick={this.adopt }>Yes</button>
                                    <button onClick={this.toggleModel }>No sir</button>


                                </div>
                            </div>
                        </Modal>) : null
                    }
                </div>
            </div>
        )
    }
}

export  default  function     DetailsWithErrorBoundary(props){
    return(
        <ErrorBoundary>
            <Details {...props}/> 
        </ErrorBoundary>
    )
}

//react very explicit

//cant use hooks remember 

//npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react
  