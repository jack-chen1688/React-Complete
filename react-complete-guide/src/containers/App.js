import React, { Component } from 'react';

//import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id:'asdf',name: 'Tom', age: 27},
      {id:'xzvf',name: 'Manu', age: 28},
      {id:'acsd',name: 'Steven', age: 21}
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  hideCockpit = () => {
    console.log('hideCockpit called')
    this.setState({
      showCockpit: false
    })
  }

  deletePersonHandler = (personIndex) => {
    console.log("delete is called for", personIndex)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }


  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <Persons 
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
         />)
    }
  
    return (
        <div className="App">
          <button onClick={() => {
            this.setState((prevState, props) => {
                return {showCockpit:!prevState.showCockpit}
              });
            }}
          >
            Hide Cockpit
          </button>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            show={this.state.showPersons}
            personsLength={this.state.persons.length} 
            click={this.togglePeronsHandler}
          />: null}
          {persons}
        </div>
    );
  }
}

export default App;