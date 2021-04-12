import React, { Component } from 'react';

//import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

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
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer', 
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App!</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.togglePeronsHandler}> Toggle Persons </button>
          {persons}
        </div>
    );
  }
}

export default App;

// export default app