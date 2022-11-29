import './App.css';
import User from './components/User';
import React from 'react';
import Search from './components/Search';

// let usersData = [
//   {id:1, name:"Tim", username:"timtim", email:"tim@gmail.com"},
//   {id:2, name:"Mary", username:"marymary", email:"mary@gmail.com"},
//   {id:3, name:"John", username:"johnjohn", email:"john@gmail.com"},
//   {id:4, name:"Dana", username:"danadana", email:"dana@gmail.com"}
// ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Users App",
      subTitle: "My Robots Users",
      usersData: [],
      text: "",
      text2: ""
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  changeTitles = () => {
    this.setState({title: "Robots App"})
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then (data => {
      this.setState({usersData: data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  searchRobots = () => {
    this.setState({text2: this.state.text})
  }

  render() {
    const {title, subTitle, usersData, text2} = this.state;
    const filterRobots = usersData.filter(element => {
      return element.name.toLowerCase().includes(text2.toLowerCase());
    });

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div>
          <button onClick={this.changeTitles}>Change Title</button>
          {/* <button onClick={this.getUsers}>Get Users</button> */}
          <Search handleChange={this.handleChange} searchRobots={this.searchRobots}/>
        </div>
          {
            filterRobots.map((element, index) => {
              return (
                  <User id={element.id} name={element.name} username={element.username} email={element.email} key={index}/>
              )
            })
          }
      </div>
    );
  }
}

export default App;
