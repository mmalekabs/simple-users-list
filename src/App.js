import React, {useState} from 'react';
import AddUser from "./components/AddUser/AddUser.component";
import UsersList from "./components/UsersList/UsersList.component";


function App() {

    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (username, userAge) => {
        setUsersList((prevState) => {
            return [...prevState, {name: username, age: userAge, id: Math.random().toString()}]
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
