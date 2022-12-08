import {Routes,Route,Link} from 'react-router-dom';
import Mountains from './components/Mountains';
import Beaches from './components/Beaches';
import Birds from './components/Birds';
import Food from './components/Food';
import './App.css';

function App() {
  return (
      <div>
        <h1>SnapShot</h1>
        <nav>
          <div>
            <Link to="/" className="link">Mountains</Link>
            <Link to="/beaches" className="link">Beaches</Link>
            <Link to="/birds" className="link">Birds</Link>
            <Link to="/food" className="link">Food</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Mountains />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </div>
  )
}

export default App;
