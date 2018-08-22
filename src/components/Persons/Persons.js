import React, {Component} from 'react';
/* import own components */
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] inside contructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidUpdate()')
  }

  componentWillReceiveProps(props) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps()', props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shoundComponentUpdate');
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate!')
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate()');
  }

  render () {
    console.log('[Persons.js] inside render() ');

    return this.props.persons.map((person, index) => {
      return <Person name={person.name}
                key={person.id}
                position={index}
                age={person.age} 
                delete={() => this.props.delete(index)}
                changed={(event) => this.props.changeName(event, person.id)}/> 
    })
  }
}

export default Persons;