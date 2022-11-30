// Exercise 1 
// Instructions
// In a new Javascript file, create an ErrorBoundary Class Component:
// Create a state with a property named hasError, set by default to false.
// Use a componentDidCatch() method to set the value of the hasError property.
// Install React Router Dom in your app and check out the NavLink documentation
// In the App.js file, add this line:
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// You can also install React Bootstrap in your app. In the App.js file, add this line:
// import "bootstrap/dist/css/bootstrap.min.css";
// In the App.js file, display a Bootstrap navbar, containing three React Router <NavLink></NavLink>:
// the first one redirects to /
// the second one redirects to /profile
// the third one redirects to /shop
// In the App.js file, create three functional components : HomeScreen, ProfileScreen, and ShopScreen.
// 7. Add a Route for each of the functional component. Each one has a different path.
// 8. Wrap each of the functional component with the ErrorBoundary component.

import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch = () => {
        this.setState({hasError: true})
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <h1>An error has occured</h1>
            )
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary;