// 1. create Usres.js component
// 2. use useState and useEffect
// 3. fetch the users API https://jsonplaceholder.typicode.com/users
// 4. create User.js component to display the users

// import { useContext } from "react";
// import { AppContext } from "../App";

const User = (props) => {
    const {user} = props;
    // const {name} = useContext(AppContext);
    return (
        <div>
            {/* {name} */}
            <p>User {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <hr/>
        </div>
    )
}

export default User;