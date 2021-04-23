import React from "react";
import UserForm from "./UserForm";

const AddUser = (props) => {
  const saveUserHandler = (user) => {
    const newUser = {
      ...user,
      id: Math.random().toString(),
    };
    console.log(newUser);
    props.onAddUser(newUser);
  };
  return (
    <div>
      <UserForm onSaveUser={saveUserHandler}></UserForm>
    </div>
  );
};
export default AddUser;
