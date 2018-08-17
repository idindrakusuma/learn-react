import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Indra', age: 20},
            {name: 'Dinda', age: 21}
        ]
    }

    changeStateHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 22},
                {name: 'Supriyadi', age: 25}
            ]
        })
    }
  render() {
      return (
        <div className="App title">
            <h1> Awesome React!</h1>
            <p> This is really awesome!</p>
            {/* use the component in react */}
            <button onClick={() => this.changeStateHandler('Santriwati')}> Change State </button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.changeStateHandler.bind(this, 'Santri!')}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        </div>
      );
  }
}

export default App;
