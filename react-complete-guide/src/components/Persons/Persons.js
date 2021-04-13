import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends(Component) {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps')
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componenentWillUnmount')
    }
    render() {
        return (this.props.persons.map((person, index) => {
            console.log('[Persons.js] rendering...');
            return (
            <Person 
                name={person.name}
                age={person.age} 
                click={(index) => this.props.click(index)}
                key={person.id}
                changed={(event) => this.props.changed(person.id, event)}/>
            )}));    
    }
}
    

export default Persons