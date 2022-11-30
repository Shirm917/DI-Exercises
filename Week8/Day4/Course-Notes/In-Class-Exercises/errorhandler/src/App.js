import './App.css';
import Counter from './components/Counter';
// import Parent from './components/Parent';
// import Child from './components/Child';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Counter />
          <Counter />
        </ErrorBoundary>
        <Counter />
        <Counter />
      </header>
    </div>
  );
}

export default App;


// What we did earlier for wrapping
// <Parent username = "admin">
//         <Child />
//         </Parent> 
