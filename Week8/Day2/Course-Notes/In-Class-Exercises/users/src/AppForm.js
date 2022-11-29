import React from "react";

class AppForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            colorId: 0,
            isGo: false
        }
    }

    handleInput = (event) => {
        const value = (event.target.type === "checkbox") ? event.target.checked : event.target.value;
        this.setState({[event.target.name]: value});
    }

    // handleEmail = (event) => {
    //     this.setState({email: event.target.value})
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username is ${this.state.username}, and email is ${this.state.email} and colorId is ${this.state.colorId} and isGoing is ${this.state.isGo}`)
    }

    // handleSelect = (event) => {
    //     // console.log(event.target.value);
    //     this.setState({colorId: event.target.value})
    // }

    // handleCheck = (event) => {
    //     this.setState({isGo: event.target.checked})
    // }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" onChange={this.handleInput} placeholder="Enter Username" /><br/>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" onChange={this.handleInput} placeholder="Enter Email" />
                    <select name="colorId" onChange={this.handleInput}>
                        <option value="1">Red</option>
                        <option value="2">Blue</option>
                        <option value="3">Green</option>
                    </select>
                    <br/>
                    <label htmlFor="isGoing">Is Going: </label>
                    <input type="checkbox" id="isGoing" name="isGo" onChange={this.handleInput}/>
                    <br/>
                    <input type="submit" />
                </form>
            </>
        )
    }
}

export default AppForm;