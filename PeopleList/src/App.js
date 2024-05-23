import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prev)=> {
      return [...prev, {
        name: uName,
        age: uAge
      }]
    });
  };

  return (
    <div>
     
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
