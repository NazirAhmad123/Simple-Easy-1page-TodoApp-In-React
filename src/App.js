import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }
  
  changeUserInput(input){
    //console.log("Input: ", input);
    this.setState({
      userInput: input
      
    })
  }

  addToList(input){
    //console.log(input);
    let listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  render() {
    return (
      <div style={{marginTop: '100px'}} className="App">
        <input 
        onChange={(e) => this.changeUserInput(e.target.value)} 
        value={this.state.userInput} type="text" />
        <button onClick={() => this.addToList(this.state.userInput)}>Add</button>

        <ul>

          {this.state.list.map( (val) => <li style={{listStyleType: 'none'}} >{val} </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
