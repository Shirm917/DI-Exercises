import './App.css';
import User from './components/User';
import UserClass from './components/UserClass';

function App() {
  let usersData = [
    {id:1, name:"Tim", username:"timtim", email:"tim@gmail.com"},
    {id:2, name:"Mary", username:"marymary", email:"mary@gmail.com"},
    {id:3, name:"John", username:"johnjohn", email:"john@gmail.com"},
    {id:4, name:"Dana", username:"danadana", email:"dana@gmail.com"}
  ]
  return (
    <div>
      <UserClass name="aaa" username="bbb" email="ccc" />
        {
          usersData.map((element, index) => {
            return (
              <div key={index}>
                <User id={element.id} name={element.name} username={element.username} email={element.email} />
              </div>
            )
          })
        }
    </div>
  );
}

export default App;
