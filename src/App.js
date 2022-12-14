import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/Adduser';
import UserList from './components/Users/UserList';

function App() {
  const[userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()},];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList} />
    </div>
  );
}

export default App;
