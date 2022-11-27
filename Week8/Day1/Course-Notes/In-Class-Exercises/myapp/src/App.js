import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Form />
      </header>
    </div>
  );
}

export default App;
