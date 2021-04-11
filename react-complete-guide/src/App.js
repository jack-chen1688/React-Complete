import React, { Component } from 'react';

//import React, { useState } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

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

  // nameChangedHandler1 = (index, event) => {
  //   console.log(event.target.value, index)
  //   const persons = [...this.state.persons]
  //   const person = {...persons[index]}
  //   person.name = event.target.value
  //   persons[index] = person
  //   this.setState({persons:persons})
  // }

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
        <div>
          { this.state.persons.map((person, index) => {
            return (
              <Person 
                name={person.name}
                age={person.age} 
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(person.id, event)}
                // changed={(event) => this.nameChangedHandler1(index, event)}

                // changed={this.nameChangedHandler.bind(this, person.id)}
                />
            )})
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
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

export default Radium(App);

// const app = props => {
  
//   const [personsState, setPersonsState] = useState(
//     {
//       persons: [
//         { name: 'Toms', age: 27},
//         { name: 'Manu', age: 28},
//         { name: 'Steven', age: 21} 
//       ]
//     }
//   );

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'John', age: 27},
//         { name: 'Manu', age: 28},
//         { name: 'Steven', age: 21}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App!</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}> Switch Name </button>
//       <Person name= {personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name= {personsState.persons[1].name} age={personsState.persons[1].age}/>
//       <Person name= {personsState.persons[2].name} age={personsState.persons[2].age}>
//         My Hobbies: Racing 
//       </Person>
//     </div>
//   );
// }

// export default app