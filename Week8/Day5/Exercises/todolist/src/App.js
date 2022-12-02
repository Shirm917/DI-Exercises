import './App.css';
import React from 'react';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      tasks: [],
      num: 0
    }
  }

  addToDo = (event) => {
    if (event.key === "Enter") {
      this.setState({text: event.target.value}, () => {
        this.state.tasks.push({id: this.state.num , text: this.state.text});
        this.setState({num: this.state.num + 1})
        this.setState({tasks: [...this.state.tasks]})
      });
      event.target.value = "";
    }
  }

  deleteTask = (event) => {
    const index = this.state.tasks.findIndex((element) => {
      return element.id == event.target.id;
    });
    this.state.tasks.splice(index, 1);
    this.setState({tasks: [...this.state.tasks]});
  }

  render() {
    return (
      <section>
        <List tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        <div>
          <input type="text" onKeyDown={this.addToDo}/>
        </div>
      </section>
    );
  }
}

export default App;
