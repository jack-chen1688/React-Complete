import React, {useEffect} from 'react';


const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');  

        setTimeout(()=>{
            alert('Saved data to cloud!')
        }, 1000)
    }, [])

    const style = {
        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer', 
    };

    if (props.show) {  
        style.backgroundColor = 'red';
    }

    const classes = [];
    if (props.persons.length <= 2) {
      classes.push('red')
    }

    if (props.persons.length <= 1) {
      classes.push('bold')
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={style} onClick={props.click}> Toggle Persons </button>
        </div>
    )
}

export default cockpit;          