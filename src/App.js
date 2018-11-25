import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Kriszab Reviews</h1>
        <h2>Bill's Restaurant</h2>
        <img src="assets/IMG_20181118_155527.jpg"></img>
        <p>The review goes here</p>
        <div>
          <div>
            Hospitality - 
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
          </div>
          <div>
            Food / drink - 
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
          </div>
          <div>
            Place - 
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>  
          </div>
          <div>
            Price -
            <FontAwesomeIcon icon={faDollarSign}/>
            <FontAwesomeIcon icon={faDollarSign}/>
            <FontAwesomeIcon icon={faDollarSign}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
