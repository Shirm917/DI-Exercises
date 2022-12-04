import React from 'react';
import {connect} from 'react-redux';
import Child from './Child';
import './App.css';
import { changePropOne } from './actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property_one: "text 1",
      property_two: "text 2"
    }
  }

  handleChange = (event) => {
    this.setState({property_one: event.target.value})
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h2>Simple Redux Example</h2>
          {/* <div>Property one: {this.state.property_one}</div>
          <input type="text" onChange={this.handleChange}/> */}

          <div>Property one from store: {this.props.my_one}</div>
          <input type="text" onChange={this.props.myChange}/>

          {/* <div>Property two: {this.state.property_two}</div> */}
          <div>Property two from store: {this.props.my_two}</div>
          <Child />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    my_one: state.property_one,
    my_two: state.property_two
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myChange: (event) => dispatch(changePropOne(event.target.value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
