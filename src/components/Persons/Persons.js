import React from 'react';
/* import own components */
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
  return <Person name={person.name}
                 key={person.id}
                 age={person.age} delete={() => props.delete(index)}
                 changed={(event) => props.changeName(event, person.id)}/>
})

export default persons;