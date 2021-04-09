import React from 'react'

const UserInput = (props) => {
    return (
        <div>
            <input type="text" value={props.username} onChange={props.changed} />
         {/* <input type="text" value={props.username} /> */}
            {/* <input type="text" /> */}
        </div>
    )
}

export default UserInput