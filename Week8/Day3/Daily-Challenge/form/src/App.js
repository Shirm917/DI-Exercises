// Daily Challenge
// In this challenge you will process Form data as the user enters or selects any option of the given form.
// In the App.js You will create a stateful component with props.
// Create a function named handleChange:
// that retrieves the event.target of the inputs.
// and checks the status of the checkboxes (ie. “checked” or not). Use a ternary operator.
// Render a FormComponent that displays the form, and the value of the inputs.

import './App.css';
import React from "react";
import Form from './Form';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fname: "",
      lname: "",
      age: "",
      gender: "",
      country: "",
      dietNf: "No",
      dietLf: "No",
      dietV: "No"
    }
  }

  handleChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked ? "Yes" : "No" : event.target.value;
    this.setState({[event.target.name]: value});
  }

  render() {
    const {fname,lname,age,gender,country,dietNf,dietLf,dietV} = this.state;
    return (
      <>
        <Form handleChange={this.handleChange}/>
        <section>
          <h1>Entered information:</h1>
          <p>Your name: {fname + " " + lname}</p>
          <p>Your age: {age}</p>
          <p>Your gender: {gender}</p>
          <p>Your destination: {country}</p>
          <p>Your dietary restrictions:</p>
          <ul>
            <li>**Nuts free: {dietNf}</li>
            <li>**Lactose free: {dietLf}</li>
            <li>**Vegan meal: {dietV}</li>
          </ul>
        </section>
      </>
    )
  }
}



export default App;
