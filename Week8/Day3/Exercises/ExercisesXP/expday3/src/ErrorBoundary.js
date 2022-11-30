import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            err: null
        }
    }

    componentDidCatch = (err) => {
        this.setState({err: err})
    }

    render() {
        if (this.state.err) {
            return (
                <h1>Uh Oh! The website crashed!</h1>
            )
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary;