import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import User from './User'
import Hobbies from './Hobbies'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User 
            name="Pablo Ortega"
            description="KSquare University Student"
            age={25}
            avatar={
              <Avatar
              src="https://picsum.photos/200/300?grayscale"
              alt="Imagen de prueba"/>
            }
          />
          <Hobbies
            hobbies= {[{name: 'Chess', description: 'Tableboard game', isActive: false }, 
                       {name: 'Catan', description: 'Tableboard game', isActive: true },
                       {name: 'Age of empires 2', description: 'Strategy game', isActive: true }]}
            showHobbies={true}
          />
        </header>
      </div>
    );
  }
}

function Avatar(props){
  return (
    <React.Fragment>
        <img src={props.src} alt={props.alt} />
    </React.Fragment>
);
}

export default App;
