import React from 'react';
import Robots from './components/Robots';
import Search from './components/Search';
import {connect} from 'react-redux'
import { getRobots } from './redux/actions';
import './App.css';
import 'tachyons';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getRobots();
  }

  render() {
    const {robots,text} = this.props;
    const filterRobots = robots.filter(element => {
      return element.name.toLowerCase().includes(text.toLowerCase())
    })

    return (
      this.props.robots.length === 0 ? <h1>Loading</h1> :
      <div className="tc">
        <Search />
        {/* <button onClick={this.props.getRobots}>Check</button> */}
        {
          filterRobots.map(element => {
            return (
              <Robots robot={element} key={element.id}/>
            )
          })
        }
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  console.log(state);
  return {
    robots: state.reducer_robots.robots,
    text: state.reducer_search.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRobots: () => dispatch(getRobots())
  }
}

export default connect(mapPropsToState,mapDispatchToProps)(App);
