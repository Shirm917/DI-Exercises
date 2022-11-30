import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            errInfo: null
        }
    }
    
    componentDidCatch = (err, errInfo) => {
        console.log(err, errInfo);
        this.setState({err: err, errInfo: errInfo});
    }

    render() {
        if (this.state.err) {
            return (
            <div>
                Something went wrong... we are fixing the problem
            </div>
            )
        }
        return (
            this.props.children 
        )
    }
}

export default ErrorBoundary;