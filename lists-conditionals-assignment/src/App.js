import React, { Component } from 'react';

import './App.css';
import Validation from './Validation/Validtation'
import Char from './Char/Char'
class App extends Component {

  state = {userInput: ''}
  changedHandler = (event) => {
    // console.log(event.target.value)
    this.setState({userInput:event.target.value})
  }

  deleteHandler = (index) => {
    const array = this.state.userInput.split('');
    array.splice(index, 1)
    const newInput = array.join('')
    this.setState({userInput:newInput})
  }

  render() {
    return (
      <div className="App">
        <input 
          type="text" 
          value={this.state.userInput}
          onChange={this.changedHandler}   
        />
        <Validation length={this.state.userInput.length}/>
        {
          this.state.userInput.split('').map((ch, index) => {
            return (
              <Char char={ch} key={index} clicked={()=>this.deleteHandler(index)}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
