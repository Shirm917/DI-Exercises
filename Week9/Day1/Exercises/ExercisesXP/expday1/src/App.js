import {Provider} from 'react-redux'
import {createStore} from 'redux';
import { reducer } from './reducers';
import Counter from './components/Counter';
import './App.css';
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
            <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
