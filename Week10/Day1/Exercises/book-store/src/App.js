// import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Components/Search";
import BookList from "./Components/BookList";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <BookList/>
    </div>
  );
}

export default App;
