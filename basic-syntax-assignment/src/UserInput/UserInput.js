import React from 'react'

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    }
    return (
        <input 
            type="text" 
            style={inputStyle} 
            value={props.username} 
            onChange={props.changed} />
        // <input type="text" onChange={props.changed} />
    )
}

export default UserInput