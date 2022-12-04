import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Movies</h1>
        <MovieList />
        <MovieDetails />
      </header>
    </div>
  );
}

export default App;
