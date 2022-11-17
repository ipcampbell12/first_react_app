import React from "react";
import './App.css'
//have to import styles as well


//have to use className in react, not class

//write js in curly braces
function Tweet(props) {
    return (
        <div className='tweet'>
            <h3>{props.name}</h3>
            <p> {props.message}</p>
            <h3>Number of likes: {props.likes}</h3>
        </div>
    )
}

export default Tweet;