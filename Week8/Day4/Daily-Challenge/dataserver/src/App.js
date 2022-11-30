// Daily Challenge
// Instructions :
// You will send data to an Express server with React and display it.
// Part I
// Create a server folder, containing a server.js file. Create a GET request to the /api/hello route that sends the message “Hello From Express”.
// Create a React App in a client folder. In the App.js file, use the componentDidMount() method and async await to fetch the message from the /api/hello route, and display it as a header.
// Part II
// In the App.js file create a form. You will type something in the input field and submit the form. Use async await to POST the input value to the Express server.
// In the server.js file, create a POST request, that will call the /api/world route. This request will retrieve the body and respond with a message “I received your POST request. This is what you sent me: <value of the input field>“
// The message will also be displayed right below the input field:
// You will also see the message that you sent from the client, using a console.log on the request body in the POST Express route:

import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      value: "",
      messageReceived: ""
    }
  }

  async componentDidMount() {
    const data = await fetch("http://localhost:3001/api/hello")
    .then(result => result.json())
    .then(data => this.setState({message: data}))
    .catch(err => console.log(err))
  }

  getValue = (event) => {
    this.setState({value: event.target.value})
  }
  
  postValue = async (event) => {
    console.log("yes");
    const {value} = this.state;
    event.preventDefault();
    await fetch("http://localhost:3001/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({value})
    })
    .then(result => result.json())
    .then(data => this.setState({messageReceived: data}))
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>Post to Server:</h2>
        <form onSubmit={this.postValue}>
          <input type="text" onChange={this.getValue}/>
          <button>Submit</button>
        </form>
        <p>{this.state.messageReceived}</p>
      </div>
    );
  }
}

export default App;
