import React, {Component} from 'react';
/* import own components */
import Person from './Person/Person';

class Persons extends Component {
  render () {

    return this.props.persons.map((person, index) => {
      return <Person name={person.name}
                key={person.id}
                age={person.age} 
                delete={() => this.props.delete(index)}
                changed={(event) => this.props.changeName(event, person.id)}/> 
    })
  }
}

export default Persons;