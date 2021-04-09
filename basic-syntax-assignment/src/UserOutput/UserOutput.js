import React from 'react'
import './UserOutput.css'
const UserOutput = (props) => {
    const secondStyle = {
        fontWeight: 'bold',
        backgroundColor: 'red'
    }
    return (
        <div> 
            <p class="first">{props.username} </p>
            <p style={secondStyle}>paragraph 2 </p>
        </div> 
        
    )
}

export default UserOutput