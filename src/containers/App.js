import React, {Component} from 'react';
// import Radium, {StyleRoot} from  'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside contructor', props);
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidUpdate()')
  }

	state = {
		persons: [
				{id: 1, name: undefined, age: 20},
				{id: 2, name: 'Dinda', age: 21},
				{id: 3, name: 'Saraswati', age: 24}
		],
    showPerson: false,
    toggleHidePersonClicked: 0
	}

	changeStateHandler = (newName) => {
		this.setState({
				persons: [
						{id: 2, name: newName, age: 21},
						{id: 3, name: 'Saraswati', age: 24}
				]
		})
	}

	changeNameHandler = (event, id) => {
		/* first, find index of object */
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		})
		/* get value object from original object state */
		const person = {
			...this.state.persons[personIndex]
		}
		/* change the name from value input */
		person.name = event.target.value;
		/* make persons with the value from older value state person */
		const persons = [...this.state.persons];
		/* updated with new value */
		persons[personIndex] = person;
		/* updated in state */
		this.setState({
				persons: persons
		})
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({
				persons: persons
		})
	}

	showHidePerson = () => {
		const doesPerson = this.state.showPerson;
		this.setState((prevState, props) => {
      return {
        showPerson: !doesPerson,
        toggleHidePersonClicked: prevState.toggleHidePersonClicked + 1
      }
    })
	}

  render() {
    console.log('[App.js] inside in render()');
    /* if using logic in jsx, better than login in javascript */
	  let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          delete={this.deletePersonHandler} 
          changeName={this.changeNameHandler} />
      ); 
    }
	  
    return (
        <div className="container">
          <Cockpit
            appTitle={this.props.title}
            changeStateHandler={this.changeStateHandler} 
            showPerson={this.state.showPerson}
            showHidePerson={this.showHidePerson} />
          { persons }
        </div>
    );
  }
}

// export default Radium(App);
export default App;
