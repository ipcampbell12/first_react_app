import React, { useState } from "react";

function Hello() {
    // const sayHello = () => {
    //     console.log('hello');
    // }

    const [greeting, setGreeting] = useState("What?")

    const sayGreeting = () => {
        setGreeting('Oh, it\'s you! Hello there!')
    }
    //don't use parenethese for functions, just reference. () would invoke function as soon as it is rendered
    return (
        <div className="hello">
            <h3> This is the hello component</h3>
            <button onClick={sayGreeting}>Say Hello</button>
            <h3> {greeting}</h3>

        </div>

    )
}

export default Hello;