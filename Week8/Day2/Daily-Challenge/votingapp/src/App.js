// Daily Challenge
// In the App.js create an array of objects in the state. Each object contains the language and the number of votes per language.
// Use the below object as a starting point:

import './App.css';
import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      languages : [
          {id: 0 ,name: "Php", votes: 0},
          {id: 1, name: "Python", votes: 0},
          {id: 2, name: "JavaSript", votes: 0},
          {id: 3, name: "Java", votes: 0}
      ]
    }
  }

  addVote = (event) => {
    const name = event.target.parentNode.getAttribute("id");
    this.setState({votes: this.state.languages[name].votes++})
  }

  render() {
    return ( 
      <section>
        <h1>Vote Your Language!</h1>
        {
        this.state.languages.map((element, index) => {
          return (
              <div key={index} id={element.id} >
                <span>{element.votes}</span>
                <span>{element.name}</span>
                <button onClick={this.addVote}>Click Here</button>
              </div>
            )
        }) 
        }
      </section>
    )
  }
}
export default App;
