import React, {Component} from 'react';
import './Person.css';
import PropTyes from 'prop-types';
import Aux from '../../../hoc/Auxilary'

class Person extends(Component) {
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }

    render() {
        console.log('[Person.js] rendering')
        return (
            <Aux>
                <p onClick={this.props.click}> 
                    I'm {this.props.name} and I am {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input 
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Aux>
        );
    }
    
};

Person.propTypes = {
    click: PropTyes.func,
    name: PropTyes.string,
    age: PropTyes.number,
    changed: PropTyes.func,
}

export default Person;