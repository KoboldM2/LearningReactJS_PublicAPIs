import React, {Component} from 'react'

import './style/footerStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class footerComponent extends Component {
    render() {
        return (
            <footer id = "footerDiv">
                <div>
                    Credits to the free API from <a href ="https://pokeapi.co/" target="_blank" rel= "noopener noreferrer">Pokeapi.co</a>
                </div>
            </footer>
        );
    }
}