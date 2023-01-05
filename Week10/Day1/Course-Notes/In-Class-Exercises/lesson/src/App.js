import {useState,useEffect,createContext} from 'react';
import Users from './components/Users';
import './App.css';

export const AppContext = createContext(null);

function App() {
  // state, function setting the state, default value
  // const [count,setCount] = useState(0);
  // const [recount,setRecount] = useState(10);
  const [txt, setTxt] = useState("");
  // useEffect(() => {
  //   console.log(count);
  //   setRecount(recount + 10);

  // }, [txt]);

  const [name,setName] = useState("");

  return (
    <AppContext.Provider value={{name, setName, txt, setTxt}}>
      <div className="App">
        <header className="App-header">
          {/* <input type="text" onChange={(event) => setTxt(event.target.value)} />
          <button onClick={() => setCount(count + 1)}>+</button>
          Count: {count} 
          <br/>
          Recount: {recount}
          <button onClick={() => setCount(count - 1)}>-</button> */}
          <Users />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;


// Notes:
 // const [state,setState] = useState();
  // this.state = {
  //   count: 0 -- initial count (0)
  // } -- count
  // this.setState({count: 10}) -- setCount

  // const [name, setName] = useState("bla bla");
  // const [users, setUsers] = useState([]);
  // const addOne = () => {
  //   setCount(count + 1)
  // }