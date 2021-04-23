import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: userName,
      age: +userAge,
    };
    props.onSaveUser(userData);
    // console.log(userData);
    setUserName("");
    setUserAge("");
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type="text" onChange={nameChangeHandler} value={userName} />
      <label>Age</label>
      <input type="number" onChange={ageChangeHandler} value={userAge} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
