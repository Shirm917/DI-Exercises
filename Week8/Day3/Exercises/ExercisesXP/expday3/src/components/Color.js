// Exercise 2
// Use the shouldComponentUpdate() method and set it to return true.
// When the button is clicked on, the value of the favoriteColor property should change to “pink”.
// If you set the return of the shouldComponentUpdate() method to false, you won’t be able to change the value of the favoriteColor property to “blue”, (even after clicking on the button)
// Part II: componentDidUpdate
// When the component is mounting, it will be rendered with the favorite color “red”.
// When the component has been mounted, a timer changes the state, and the color becomes “yellow”.
// Use the componentDidUpdate method, that when executed will add the message "My Favorite color is <value of the favoriteColor property of the state object>" to a div tag.
// Part III : getSnapshotBeforeUpdate
// After the update phase is triggered, use the getSnapshotBeforeUpdate() method that when executed, adds a message containing the value of the prevState to a div tag.
// Then use the componentDidUpdate() method to add a message containing the value of the current state to a div tag.

// Exercise 3
// Add a new property named show to the state object. Set the value of this property to true.
// Add a Class component named Child to the same file. This new component will render a ‘Hello World!’ message in a header tag.
// This new component uses the componentWillUnmount method to alert an unmounted message.
// Render the Child component in your App, only if the value of the show property is set to true.
// Create a “Delete” button that when clicked on (ie. onClick) will call a function that updates the value of the show property to false.

import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: "red",
            show: true
        }
    }

    componentDidMount = () => {
        setTimeout( () => 
        this.setState({favoriteColor: "yellow"}) 
        ,5000)
    }

    shouldComponentUpdate = () => {
        return true;
    }

    componentDidUpdate = () => {
       document.getElementById("message").textContent = `My Favorite color is still ${this.state.favoriteColor}`; 
    }

    getSnapshotBeforeUpdate = (prevProps,prevState) => {
        document.getElementById("prev").textContent = `Before the update, the favorite was ${prevState.favoriteColor}. The updated favorite is ${this.state.favoriteColor}`
    }

    changeColor = () => {
        this.setState({favoriteColor: "pink"});
    }

    deleteHeader = () => {
        this.setState({show: false})
    }

    render() {
        return (
            <>
                <div>
                    <h1>{`My Favorite Color is ${this.state.favoriteColor}`}</h1>
                    <h1 id="message"></h1>
                    <p id="prev"></p>
                    <button onClick={this.changeColor}>Change Color</button>
                </div>
                
                <div>
                    {
                    this.state.show ? <Child /> : null
                    }
                    <button onClick={this.deleteHeader}>Delete Header</button>
                </div>
            </>
        )
    }
}

export default Color;

class Child extends React.Component {
    constructor() {
        super()
    }

    componentWillUnmount = () => {
        alert("The component named Header is about to be unmounted")
    }

    render() {
        return (
            <>
                <h1>Hello World!</h1>
            </>
        )
    }
}

