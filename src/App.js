import React, { useState } from "react";
import Hello from "./sayHello";
import Tweet from "./tweet";
import Increment from "./increment";


//create component
//react compiles code into html
function App() {

  const [isRed, setRed] = useState(false);

  const changeColor = () => {
    //toggle class = get opposite of current value
    setRed(!isRed)
  }

  //hypothetical data from API (object)
  /* const [user, setUser] = useState({
    name: 'Ian',
    age: "Nona yo bidnis",
    posts: ['my first post', 'welcome to your mom\'s house!']
  }); */

  //data from API
  const [users, setUsers] = useState([
    { name: "Your Mom", message: "Hey!", likes: 45 },
    { name: "John", message: "Oh yeah !?", likes: 15 },
    { name: "Traversy", message: "I have met your mom", likes: 139 },
  ])

  //jsx
  //write component as html to render it
  //can create multiple instance of component
  //name is a prop
  return (
    <div className="app">
      <button onClick={changeColor}>Change color</button>
      <h1 className={isRed ? 'pink' : ''}> Cool App that can change color!</h1>

      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))};

      <Hello />

      <Increment />
    </div>
  );
};

//behind the scenes: React.createElement(div)

//export component
export default App;