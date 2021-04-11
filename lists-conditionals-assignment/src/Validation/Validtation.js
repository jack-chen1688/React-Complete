import React from 'react';

const validation = (props) => {
    const length = props.length
    let message = 'Text too short'

    if (length >= 5)
        message = 'Text long enough'
        
    return (
        <div>
            {message}
        </div>
    )
}

export default validation