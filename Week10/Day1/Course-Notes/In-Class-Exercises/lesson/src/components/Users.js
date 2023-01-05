// 1. create Users.js component
// 2. use useState and useEffect
// 3. fetch the users API https://jsonplaceholder.typicode.com/users
// 4. create User.js component to display the users

import {useState,useEffect,useContext} from 'react';
import User from './User';
import { AppContext } from '../App';

const Users = () => {
    const [users,setUsers] = useState([]);
    const {name,setName} = useContext(AppContext);

    useEffect(() => {
        const getData = async() => {
            try {
                const result = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await result.json();
                setUsers(data);
            } catch(err) {
                console.log(err);
            }
        }
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(result => result.json())
        // .then(data => setUsers(data))
        // .catch(err => console.log(err));
        getData();
    },[]);

    useEffect(() => {
        setName("Robots")
    },[]);
    console.log(users);
    return (
        <div>
            <h1>{name}</h1>
            {
                users.map(user => {
                    return (
                        <User key={user.id} user={user}/>
                    )
                })
            }
        </div>
    )
}

export default Users;