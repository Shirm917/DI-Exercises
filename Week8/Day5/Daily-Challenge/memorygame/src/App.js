import './App.css';
import React from 'react';
import GameLayout from './components/GameLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const superheroesObj = require("./superheroes.json");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      superheroesArr: superheroesObj.superheroes,
      score: 0,
      topScore: 0
    }
  }

  shuffle = () => {
    const {superheroesArr} = this.state;
    for (let i = superheroesArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [superheroesArr[i], superheroesArr[j]] = [superheroesArr[j], superheroesArr[i]];
    }
    this.setState({superheroesArr: [...superheroesArr]});
  }
  
  getScore = (arrElement) => {
    const {superheroesArr, score, topScore} = this.state;
    if (arrElement.clicked === false) {
      this.setState({score: score + 1});
      arrElement.clicked = true;
      this.setState({superheroesArr: [...superheroesArr]});
    } else {
        if (score > topScore) {
          this.setState({topScore: score});
        }
        this.setState({score: 0});
        superheroesArr.map(element => {
          return element.clicked = false;
        })
        this.setState({superheroesArr: [...superheroesArr]});
    }
  }

  shuffleAndGetScore = (arrElement) => {
    this.shuffle();
    this.getScore(arrElement);
  }

  render() {
    return (
      <div>
        <GameLayout superheroesArr={this.state.superheroesArr} shuffleAndGetScore={this.shuffleAndGetScore} score={this.state.score} topScore={this.state.topScore} getScore={this.getScore}/>
      </div>
    );
  }
}

export default App;
