import {Routes,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/movie/:id" element={<Movie/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
