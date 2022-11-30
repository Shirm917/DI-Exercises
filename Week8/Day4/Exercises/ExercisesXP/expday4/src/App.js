// Exercise 4
// Instructions
// Go to webhook and copy the link of “Your unique URL”.
// In the App.js file, create an async await function to fetch the json data from the URL you copied.
// Use a POST method and some headers.
// Send this hardcoded stringified json data to your body.
// In the App.js file, create a button, that when clicked on, displays the response in the console.
// Finally, open the webhook site again, and check the output in the API.

import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import ErrorBoundary from './components/ErrorBoundary';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

async function webHook() {
  const data = await fetch("https://webhook.site/c17b4c37-228a-4857-b1cd-7a807799b58b", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27 })
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

 function App() {
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
            <Nav.Link><Link to="/shop">Shop</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen/></ErrorBoundary>}></Route>
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen/></ErrorBoundary>}></Route>
        <Route path="/shop" element={<ErrorBoundary><ShopScreen/></ErrorBoundary>}></Route>
      </Routes> */}
      {/* <PostList /> */}
      {/* <Example1 />
      <Example2 />
      <Example3 /> */}
      <button onClick={webHook}>Press me to post some data</button>
    </div>
  )
}

export default App;
