import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const AddUserHandler = (user) => {
    console.log("[App.js] add user", user);
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler} />
      <Users items={users} />
    </div>
  );
}

export default App;
