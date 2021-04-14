import React, {Component} from 'react';
import './Person.css';
import PropTyes from 'prop-types';
import Aux from '../../../hoc/Auxilary'

class Person extends(Component) {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
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
                    ref = {this.inputElementRef}
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