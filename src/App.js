import React, {Component} from 'react'
import axios from 'axios'
import {Jumbotron, Container} from 'react-bootstrap'

import './style/mainAppStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './footerComponent'

export default class App extends Component {
  state = {
    isLoaded: false,
    pokemonData: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => {
        this.setState({
          pokemonData: res.data,
        isLoaded: true
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if(!this.state.isLoaded) {
      return(
        <div id = "mainBody">Loading</div>
      );
      
    }
    else {
      return(
        <div>
          <div id = "mainBody">
            <Jumbotron fluid>
              <Container>
                <h1>Pokemon API</h1>
              </Container>
            </Jumbotron>

            <div id = "pokemonData">
              <h1> {this.state.pokemonData.name} </h1>
              <h2>Pokemon ID: #{this.state.pokemonData.id}</h2>
              <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"/>
            </div>


              
          </div>

          <Footer/>
        </div>
      );
    }
  }
}
