import './App.css';
import React from 'react';
import QuotesDatabase from "./components/QuotesDatabase";
import QuoteBox from './components/QuoteBox';

// `rgb(${r},${g},${b})`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: QuotesDatabase,
      randomQuote: QuotesDatabase[0].quote,
      randomAuthor: QuotesDatabase[0].author,
    } 
  }

  getRandomNum = () => {
    let num = Math.floor(Math.random() * this.state.quotes.length);
    if (num === this.state.noRepeatNum) {
        this.getRandomNum();
    } else {
        this.setState({noRepeatNum: num});
    }
    return num;
}

  getRandomQuote = () => {
    const randomNum = this.getRandomNum();
    const {quotes} = this.state;
    const quote = quotes[randomNum].quote;
    const author = quotes[randomNum].author;
    if (author.length === 0) {
      this.setState({randomQuote: quote, randomAuthor: "Unknown"});
    } else {
      this.setState({randomQuote: quote, randomAuthor: author});
    }
  }

  getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    this.setState({randomColor: color})
  }

  getQuoteAndColor = () => {
    this.getRandomQuote();
    this.getRandomColor();
  }


  render() {
    const {randomQuote, randomAuthor, randomColor} = this.state;
    return (
      <div style={{
        backgroundColor: randomColor,
        height: "100vh"
      }}>
        <QuoteBox randomQuote={randomQuote} randomAuthor={randomAuthor} randomColor={randomColor} />
        <button style={{backgroundColor: randomColor}} onClick={this.getQuoteAndColor}>New quote</button>
      </div>
    );
  }
}

export default App;
