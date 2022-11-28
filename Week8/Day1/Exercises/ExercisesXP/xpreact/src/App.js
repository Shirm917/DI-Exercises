import logo from './logo.svg';
import './App.css';
import Nojsx from './Nojsx';
import Jsx from './Jsx';
import Object from './Object';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Nojsx /> */}
        {/* <Jsx /> */}
        {/* <Object /> */}
        {/* <UserFavoriteColors animals={user.fav_animals} /> */}
        <Exercise4 />
      </header>
    </div>
  );
}

export default App;
