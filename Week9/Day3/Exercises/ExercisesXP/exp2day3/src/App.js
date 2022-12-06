import {connect} from 'react-redux'
import './App.css';
import { increaseAge,decreaseAge } from './redux/actions';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <span>{props.age}</span>
        <button onClick={props.increaseAge}>Age UP</button>
        <button onClick={props.decreaseAge}>Age DOWN</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseAge: () => dispatch(increaseAge()),
    decreaseAge: () => dispatch(decreaseAge())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
