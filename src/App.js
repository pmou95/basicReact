import React, { Component } from 'react';
import Validation from './ValidationComponent/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }
  inputChange = (event) =>{
    this.setState({userInput: event.target.value})
  }
    delete = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index,1)
      const newText = text.join('');
      this.setState({userInput: newText })
    }

  render() {
    const char = this.state.userInput.split('').map((c, index) =>{
      return <Char
        character={c}
        key={index}
        click={()=> this.delete(index)}/>
    });

    return (
      <div className="App">
          <input  
            type='text' 
            onChange={this.inputChange}
            value={this.state.userInput}/>
      <p>{this.state.userInput}</p>
      <Validation length={this.state.userInput.length}/>
      {char}
      </div>

    );
  }
}

export default App;
