import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/post/:post_id" element={<Post/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
