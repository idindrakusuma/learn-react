import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
      return (
        <div className="App title">
            <h1> Awesome React!</h1>
            <p> This is really awesome!</p>
            {/* use the component in react */}
            <Person />
        </div>
        // React.createElement('div', {className: 'App'}, 'This is awesome!')
      );
  }
}

export default App;
