import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    addCount = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        if (this.state.count > 5) {
            throw new Error("Crashed...");
        }
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.addCount}>Add</button>
            </div>
        )
    }
}

export default Counter;