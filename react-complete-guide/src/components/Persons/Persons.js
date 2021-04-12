import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends(Component) {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps')
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    render() {
        return (this.props.show ? this.props.persons.map((person, index) => {
            console.log('[Persons.js] rendering...');
            return (
            <Person 
                name={person.name}
                age={person.age} 
                click={(index) => this.props.click(index)}
                key={person.id}
                changed={(event) => this.props.changed(person.id, event)}/>
            )}) : null);    
    }
}
    

export default Persons