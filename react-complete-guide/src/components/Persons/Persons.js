import React from 'react';
import Person from './Person/Person'

const persons = (props) => (
    props.show ? props.persons.map((person, index) => {
        return (
        <Person 
            name={person.name}
            age={person.age} 
            click={(index) => props.click(index)}
            key={person.id}
            changed={(event) => props.changed(person.id, event)}/>
        )}) : null);

export default persons