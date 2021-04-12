import React, { Component } from 'react';

//import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'asdf',name: 'Tom', age: 27},
      {id:'xzvf',name: 'Manu', age: 28},
      {id:'acsd',name: 'Steven', age: 21}
    ],
    otherState: 'Some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 27},
        {name: 'Manu', age: 28},
        {name: 'Steven', age: 21}
      ], 
    })
  }

  nameChangedHandler = (id, event) => {
    console.log(event.target.value, id)
    const persons = [...this.state.persons]
    const personIndex = persons.findIndex((p) => p.id === id)
    const person = {...persons[personIndex]}
    person.name = event.target.value
    persons[personIndex] = person
    this.setState({persons:persons})
  }

  togglePeronsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    console.log("delete is called for", personIndex)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    return (
        <div className="App">
          <Cockpit 
            show={this.state.showPersons}
            persons={this.state.persons} 
            click={this.togglePeronsHandler}
          />
          <Persons 
            show={this.state.showPersons}
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
    );
  }
}

export default App;