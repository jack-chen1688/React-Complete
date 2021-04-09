import React from 'react'
import './UserOutput.css'
const userOutput = (props) => {
    const secondStyle = {
        fontWeight: 'bold',
        backgroundColor: 'red'
    }
    return (
        <div className="UserOutput"> 
            <p >{props.username} </p>
            <p style={secondStyle}>paragraph 2 </p>
        </div> 
        
    )
}

export default userOutput