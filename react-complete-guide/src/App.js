import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tom', age: 27},
      { name: 'Manu', age: 28},
      { name: 'Steven', age: 21}
    ],
    otherState: 'Some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27},
        { name: 'Manu', age: 28},
        { name: 'Steven', age: 21}
      ], 
    })
  }

  togglePeronsHanelder = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button onClick={this.togglePeronsHanelder}> Switch Name </button>
        { this.state.showPersons ?
          <div>
            <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            <Person name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'Max')}>
              My Hobbies: Racing 
            </Person>
          </div>: null
        }
      </div>
    );
  }
}

export default App;

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