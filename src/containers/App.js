import React, {Component} from 'react';
// import Radium, {StyleRoot} from  'radium';
import classApp from './App.css';
import Person from '../components/Persons/Person/Person'

class App extends Component {
	state = {
		persons: [
				{id: 1, name: 'Indra', age: 20},
				{id: 2, name: 'Dinda', age: 21},
				{id: 3, name: 'Saraswati', age: 24}
		],
		showPerson: false
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
		this.setState({ showPerson : !doesPerson})
	}

  render() {
    /* if using logic in jsx, better than login in javascript */
	  let persons = null;
	  /* dynamic class */
	  let buttonClass = '';

      if (this.state.showPerson) {
          persons = (
                  this.state.persons.map((person, index) => {
                      return <Person name={person.name}
                                     key={person.id}
                                     age={person.age} delete={() => this.deletePersonHandler(index)}
                                     changed={(event) => this.changeNameHandler(event, person.id)}/>
                    })
		  );
		  
		  /* dynamic classes */
		  buttonClass = classApp.red;
	  } else {
			buttonClass = classApp.green;
	  }
	  
	  
      return (
					<div className="container">
						<div className={classApp.App}>
							<div className="card mt-4">
								<h5 className="card-header">Awesome React!</h5>
								<div className="card-body">
									<div>
											<button onClick={() => this.changeStateHandler('Santriwati')} 
												className={buttonClass}> Change State </button>
											<button onClick={this.showHidePerson} className={buttonClass}> Show/Hide </button>
									</div>
								</div>
							</div>
						</div>
							{ persons }
					</div>
      );
  }
}

// export default Radium(App);
export default App;
